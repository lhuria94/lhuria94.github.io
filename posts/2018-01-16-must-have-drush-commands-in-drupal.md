---
layout: post
title: "Must have custom drush commands in every Drupal project"
date: 2018-01-16 00:00:00
image: '/assets/img/'
description: 'This post explains how to create custom drush commands which are in must have list for every Drupal project'
main-class: 'drupal'
tags:
- drush
- drupal
- planet drupal
categories:
- Drush
- Drupal
twitter_text: 'This post explains how to create custom drush commands which should be in must have list for every Drupal project'
---

I am working on a project where we use Drush commands a lot .... seriously like A LOT.. That said, while working on the project, I found few drush commands which come quite handy in our day to day operations. We use these commands mostly with deploy hooks and also while working locally.

Everyone uses Drush commands which are kinda in daily use while working on Drupal and we just can’t imagine our life without it in terms of increasing our productivity.

We want to be more and more productive right? Yes, we do. :)

## A little bit about Drush
Drush is an awesome command line shell and Unix scripting interface for Drupal. It is a very useful tool and its core ships with lots of useful commands for interacting with code like modules/themes/profiles. It does a lot of things like running update.php, executes sql queries and DB migrations, run cron or clear cache etc.

Even Though there are a bunch of commands available and can be found [here][drush-commands-site], which are continuously making our lives easier, we still feel the urge to have custom Drush commands that suits our project needs and can improve overall team efficiency.

Creating custom Drush commands is very easy, Drupal provides hooks to integrate with our custom modules. Infact, there is not much difference between creating custom Drush commands with Drupal 7/ Drupal 8.

## Coming back to this post
Here I am gonna mention few custom Drush commands which can be really handy while working on a project and can save plenty of your time.

Following are the things we should have automated using Drush commands:
- Database checks: This includes checking the number of threats with respect to the database, as if any unwanted module is enabled, PHP filter, ensuring errors and warnings are off etc.
- Clearing specific cache: This is useful when we would like to target a specific cid and bin using cache_clear_all() via the Drush command.
- Rebuilding theme (This is not similar to clearing theme-registry): There is no option as of now to rebuild theme when we add CSS or JS files in a themes .info file.

## Database checks
The first step, we need is to call the hook provided by Drupal. This is required to define the description of the hook, defining an alias with an example.

```php
/**
 * Implements drush_command().
 */
function my_module_drush_command() {
  $items = [];
  $items['my-module-run-db-checks'] = [
    'description' => 'Checking potential issues on the database to ensure it is production ready.',
    'callback' => 'my_module_run_db_checks',
    'examples' => [
      'drush my-module-db-checks' => 'Run few database checks on the respected target.',
    ],
    'aliases' => ['my-module-run-db-checks'],
  ];

  return $items;
}
```

Now what is required is to create the callback function with whatever things we want to check to ensure that there isn't any potential threat to the system. Following are the things we must have:

- Checking if PHP Errors and warnings are off.

```php
/**
 * Run an audit against a database to check for potential issues.
 */
function my_module_run_db_checks() {
  $errors = [];

  // Hide all PHP errors.
  $er_query = db_query("SELECT CONVERT( value
    USING utf8 ) AS error_reporting_level
    FROM variable
    WHERE name = 'error_level'
    LIMIT 0 , 30
  ");
  $record = $er_query->fetchObject();
  $error_level = unserialize($record->error_reporting_level);
  if ($error_level !== "0") {
    $errors['php_errors_visible'] = 'PHP errors are not hidden. Errors will be visible on the site.';
  }

  // Check if there is any error found.
  if (empty($errors)) {
    drush_log('DB checks completed. No problems were found.', 'success');
  }
  else {
    drush_log("\nThe following issues were found with this site:", 'error');
    foreach ($errors as $key => $value) {
      drush_log('- ' . $value, 'error');
    }
  }
}
```

- Checking if all the unnecessary modules (For example: Devel, Since XSS vulnerabilities are the #1 vulnerability found in Drupal 7 contrib modules, it's always recommended to disable the 'devel' module on production sites and (if possible) entirely remove it.) are disabled. (We will just add the following to the above callback, also we can easily add more modules the list).

```php
// Check if stage file proxy isn't enabled.
$sfp_status_query = db_select('system', 's')
  ->fields('s', ['name', 'status'])
  ->condition('s.name', 'stage_file_proxy', '=')
  ->execute()
  ->fetchAssoc();

if ($sfp_status_query['status'] === 1) {
  $errors['dblog_enabled'] = 'Stage file proxy module is still enabled.';
}

// Check if database logging isn't enabled.
$dblog_status_query = db_select('system', 's')
  ->fields('s', ['name', 'status'])
  ->condition('s.name', 'dblog', '=')
  ->execute()
  ->fetchAssoc();

if ($dblog_status_query['status'] === 1) {
  $errors['dblog_enabled'] = 'Database logging is still enabled. This will cause unnecessary read and write queries.';
}

// Make sure 'devel' module isn't enabled.
$devel_status_query = db_select('system', 's')
  ->fields('s', ['name', 'status'])
  ->condition('s.name', 'devel', '=')
  ->execute()
  ->fetchAssoc();

if ($devel_status_query['status'] === 1) {
  $errors['devel_module_enabled'] = 'Devel module is still enabled.';
}
```

- Checking if USER ID 1 is blocked or not. The Drupal account created during installation (i.e. with user ID or UID=1) behaves differently from others. Primarily, it can bypass all access callbacks: it has permission to do everything by default. Failing to secure this account could result in potential security risks. Treat the UID=1 account as you would with root on Linux systems.

```php
// Check User ID 1 is blocked.
$user_status_query = db_select('users', 'u')
  ->fields('u', ['uid', 'status'])
  ->condition('u.uid', 1, '=')
  ->execute()
  ->fetchAssoc();

if ($user_status_query['status'] === 1) {
  $errors['user_id_1_enabled'] = 'User ID 1 is still enabled. This account should be blocked for security reasons.';
}
```

- Checking if PHP filter is enabled or not. There are a lot of downsides when we are using PHP filter and apparently, there is a pretty awesome explanation for that on this [post][php-filter-discussion].

```php
// PHP filter should not be enabled on any site.
$php_filter_status_query = db_select('filter_format', 'f')
  ->fields('f', ['format', 'status'])
  ->condition('f.format', 'php_code', '=')
  ->execute()
  ->fetchAssoc();

if ($php_filter_status_query['status'] === 1) {
  $errors['php_filter_enabled'] = 'The PHP filter is still enabled and could cause potential security issues.';
}
```

For all these checks, we just need to go to the terminal and run the following command:

```bash
drush my-module-run-db-checks
```

## Clearing specific cache
We need to follow the same step i.e. we need is to call the hook provided by Drupal for defining the command definition, description etc.

```php
/**
 * Implements drush_command().
 */
function my_module_drush_command() {
  $items = [];
  $items['my-module-cc-cache-bin'] = [
    'description' => 'Clear a specific cache bin.',
    'callback' => 'my_module_cc_cache_bin',
    'examples' => [
      'drush my-module-cc-cb cid_you_want_to_clear cache_table' => 'Clear passed cid from passed table.',
    ],
    'arguments' => [
      'cid' => dt('CID for items to clear'),
      'cache_bin'   => dt('A required cache bin argument.'),
      'wildcard' => dt('Whether to do a wildcard delete'),
    ],
    'aliases' => ['my-module-cc-cb'],
  ];

  return $items;
}
```

Now, we need to define the callback which will do the fun part:

```php
/**
 * Exposes cache_clear_all to drush for deploy hooks.
 *
 * @param string|string[] $cid
 *   Cache id or array of cache ids to clear.
 * @param string $bin
 *   The bin name to clear.
 * @param bool $wildcard
 *   Default false, whether to use wildcard matching.
 */
function my_module_cc_cache_bin($cid, $bin, $wildcard = FALSE) {
  cache_clear_all($cid, $bin, $wildcard);
  drush_log('Cleared cids: ' . $cid . ' in bin: ' . $bin, 'ok');
}
```

To clear cache id or array of cids from specific cache table, we just need to go to the terminal and run the following command:

```bash
drush my-module-cc-cb cid_you_want_to_clear cache_table
```

## Rebuilding theme data

Since we know how to define an custom drush command, we can just skip to the callback directly. ;)

```php
/**
 * Rebuilding theme data properly.
 */
function my_module_rebuild_theme() {
  system_rebuild_theme_data();
  drush_log('Theme data rebuilt.', 'ok');
}
```

Now we can rebuild theme data easily with a custom drush command.

> Similarly, we can add custom Drush commands as per our use and project's need and obviously we can improvise the scripts, do additional work. This post covers important Drush commands which are essential in our day to day projects plus it also explains how we can create custom Drush commands, YAY BONUS!! :D

[drush-commands-site]: https://drushcommands.com/
[php-filter-discussion]: https://drupal.stackexchange.com/questions/2509/what-are-the-downsides-of-using-php-filter-code-in-blocks-nodes-views-args-et
