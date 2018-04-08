---
layout: post
title: "Cool things you can do with Sass - Part 1"
date: 2018-04-09 00:00:00
image: '/assets/img/2018-04-08-cool-things-you-can-do-with-sass-part-1'
description: ''
main-class: 'sass'
tags:
- drupal
- planet drupal
- css
- sass
- scss
categories:
- Drupal
- CSS
- Frontend
- Scss
twitter_text: 'Cool things you can do with Sass - Part 1'
---

I have been using Sass for like past two years and now I’m a huge fan. Even though we were doing pretty much alright with writing CSS but it never gave us that kind of flexibility that Sass provides like one of the things could be managing the complexity in stylesheets as our apps get more and more substantial. Anyways, Enough about my experience already as today we have got a bunch of cool things to cover!

## What is Sass?

It's a CSS preprocessor, that’s what you will get if you start googling and its true but hold that thought as there’s more to it.

Sass lets you use features like variables, nesting, inheritance and all with a CSS-compatible syntax. This is really obliging when you want to reduce repetition and make your massive stylesheets more organised.

**Important:** It's not a replacement for CSS, its kind of an interpreter/transpiler which spits out CSS in the end actually.

You must be thinking, then what is the difference between Sass and Scss?

Sass is itself carved into two types of syntaxes/file types: `.sass` & `.sass`.

**Sass** (Older syntax) was not quite accepted by a large audience. The reason was mostly because it's indent based instead of braces and it didn’t require semicolons, which increases the probability of human errors while writing.

Where **Scss** (New syntax) was widely accepted because it's quite similar to the way how we write CSS. Its kind of a win-win using Scss as we get to write stylesheets like CSS but we still get the benefits of Sass. Awesome!

> From now on, this article will assume that you understand Sass and well versed with its basics and practical usage, if not refer to [this][more-info] for more information.

Without further ado, let’s hop on the cool things we can use while writing scss:

## Using variables as a selector

We can define our selectors and use it in our stylesheets.
For example:

{% highlight ruby %}
// Define your base selector.
$header-base-class: '.header';

#{$header-base-class} {
  background: white;
}

// Compiles to css
.header {
  background: white;
}

{% endhighlight %}

Or, there could be a whole lot of use-cases where this can be super useful! Like umm.. in Media queries? Let’s go through it:

{% highlight ruby %}
$small-only: 640px (Define somewhere else like maybe in _settings.scss)

@media (max-width: #{$small-only}) {
  // Here do your thing, the styles will only be applied to viewport < $small-only breakpoint.
}
{% endhighlight %}

Easy-peasy right? 😃

Now you don’t have to define a hardcoded value in each of the media queries. Just change at one place like in this case `_settings.scss` and get the results everywhere.

## Parent referencing using a prefix

You must be familiar with `&` ampersand prefix we generally use. This syntax generally allows you nest nested selector modifiers with reference to its parent.

For example - You would like to change a div's background colour on hover.

{% highlight ruby %}
.highlight {
  &:hover {
    color: red;
  }
}

// Compiles to css

.highlight:hover {
  color: red;
}
{% endhighlight %}

But `&` can also be used just as a prefix to reference its parent.

Let’s say you have a base selector and want to apply particular style only when there is some specific class selector exists, usually, we tend to do something like this:

{% highlight ruby %}
$base-item-selector: '.base-selector';

#{$base-item-selector} {
  &--conditional-selector {
    #{$base-item-selector} {
      &__details {
        display: none;
      }
    }
  }
}

// Compiles to css

.base-selector--conditional-selector .base-selector__details {
  display: none;
}
{% endhighlight %}

With Parent referencing prefix, we can modify it to be:

{% highlight ruby %}
#{$base-item-selector} {
  &--conditional-selector & { // See the usage of ampersand here
    &__details {
      display: none;
    }
  }
}

// This will also compiles to similar css.

.base-selector--conditional-selector .base-selector__details {
  display: none;
}
{% endhighlight %}

Cool, right? Saved one depth and looks more organised.

## Defining variables as defaults

Using Sass, we can set variable precedence & scope with the help of `!default` flag.
Placing `!default` at the end of declaration actually does the following things:

- If you have defined a variable as `null`, it will be considered unassigned and will be assigned with `!default`.
- If the variable is assigned some value already, then it will not be re-assigned.

Confused? ok, Let's talk it out.

For instance, we have defined a text color as red, the normal process follows like this:

{% highlight ruby %}
// _my-component.scss
$text-color: red !default;

a {
  color: $text-color;
}

// Compiles to css

a {
  color: red;
}
{% endhighlight %}

Makes sense so far, right? ok, let's continue. So, now you can override the colour while importing the component styling.

{% highlight ruby %}
$text-color: blue;
@import ‘my-component’;

// Compiles to css

a {
  color: blue;
}
{% endhighlight %}

What this means is `!default` flag will only work if the values have not been already assigned/instantiated beforehand, otherwise it will be overridden.

This is an important way of writing modular CSS. That’s why we tend to define most of our variables in a file for better accessibility. The `!default` flag is very useful when using with mixins and plug-in type code.

One more interesting example you can find [here][default-example]

## Mixins and Custom Functions

Mixins and functions both exist in the same family because both accept variables as arguments but have somewhat different responsibilities. Let’s discuss one by one.

**Mixins:** Mixins can accept arguments and do the required calculations you need but the output of a mixin would be a CSS rule.

It will unfold itself when called with `@include`.

For example, suppose we need to defined different typographies in our app. Then creating mixins would make more sense:

{% highlight ruby %}
// _my-typography-rules.scss

@mixin my-typography-small {
  font-size: .75rem;
  font-weight: 300;
  letter-spacing: .01em;
  line-height: 1;
}

// _my-component.scss

#{$base-selector} {
  @include my-typography-small;
}

Compiles to

.base-selector {
  font-size: .75rem;
  font-weight: 300;
  letter-spacing: .01em;
  line-height: 1;
}
{% endhighlight %}

**Functions:** Its very much similar to mixins but in case of output it returns a single value.  Just like we have custom functions in every other language, using custom functions in sass can be very healthy for your application.

The Return value from a custom function can be of any data type. e.g. number, string, bool etc.

One of the best example we have here is calculating rems based on a base unit size. We are using this quite extensively in our application and this is something which can be used anywhere. Very generic!

Let's say, we are using rem unit with font sizes and everytime we use rem unit, we had to do manual computations. Sucks!! Isn't it?

How we really calculate `rem` is by dividing the target `size/base size` = `your result`. So the below function will give us the desired results and we can use it throughout our application.


{% highlight ruby %}
//_utility.scss

/**
 * Calculate rems based on a base unit.
 */
@function remCalc($size, $base) {
  $remSize: $size / $font-base-size;
  @return #{$remSize}rem;
}

// _my-component.scss

a {
  font-size: remCalc(20, $font-base-size);
}

{% endhighlight %}


I hope that now you get why Custom functions are really helpful as they help us avoid repeated computations. SCSS gives us a ton of inbuilt functions which you can have a look [here][custom-functions]

It’s always best to check in-built function first rather than creating your own every other time.

## Default Arguments

This is high time we talk about default arguments as we just wrapped up mixin and custom functions. They're kinda related.

Mixins and custom functions both support arguments and icing on the cake is we can define default arguments as well.

For example:

{% highlight ruby %}
@mixin abc-with-margin($x, $y, $z, $margin: 20px) {
  // Do your stuff with x, y, z.
  margin: $margin;
}

// _my-component.scss

#{$selector} {
  @include abc-with-margin(12, 23, 34);
}

// Compiles to css

.selector {
  // Stuff we did with x,y,z.
  margin: 20px;
}
{% endhighlight %}

We can also override the default value. e.g.

{% highlight ruby %}
// _my-component.scss
#{$selector} {
  @include abc-with-margin(12, 23, 34, 10px);
}

// Compiles to css

.selector {
  // Stuff we did with x,y,z.
  margin: 10px; // Overridden.
}
{% endhighlight %}

## Extending your selectors
Using Scss, you can combine your selector's styles in the CSS output. As we inherit properties from the parent class or whatever, this is quite comparable to other programming languages but the process is very different. Again, the aim is to reuse different selector’s styles so that we do not have to rewrite the code which is already being used.

{% highlight ruby %}
.menu {
  background-color: white;
}

.header-menu {
  @extend .menu;
  color: black;
}

// Compiles to css

.menu, .header-menu {
  background-color: white;
}

.header-menu {
  color: black;
}
{% endhighlight %}

As we can see now `.header-menu` has all the properties of `.menu` plus the properties it already had. Traditional inheritance right? Now, whatever .menu will define it will be inherited by `.header-menu` and can be easily overridden as well.

You must be thinking, why can’t we just use mixins here and just get it over with, why another logic. I'll show you why not.

**If we go along with mixins:**

{% highlight ruby %}
@mixin menu {
  background-color: white;
  font-size: 1rem;
  font-weight: bold;
  color: grey;
  padding: 20px;
}

.header-menu {
  @include menu;
  color: black;
}

.footer-menu {
  @include menu;
  color: black;
}

// Compiles to css

.header-menu {
  background-color: white;
  font-size: 1rem;
  font-weight: bold;
  color: grey;
  padding: 20px;
  color: black;
}

.footer-menu {
  background-color: white;
  font-size: 1rem;
  font-weight: bold;
  color: grey;
  padding: 20px;
  color: black;
}
{% endhighlight %}

See how the last property is different and as soon as the amount of menu types increases will result in more and more repeated styles with each type of menu keeps on growing. This problem can be overcome by extending your selectors.

Another advantage is it can be used with UI libraries such as foundation, bootstrap etc. One interesting read is how we can extend complex selectors [here][complex-selectors].

## Placeholders

We will take the help of a previous example, we just created a `.menu` selector just so that child selectors can inherit styles. But what if the case is that this selector does not even exists or not being used anywhere but only through its child classes. We might as well get rid of it.

Just to clarify few things before we move ahead:

- `.menu` is considered as a class.
- `#menu` is considered as id.
- `%menu` is considered as a placeholder.

Just so we don't get confused between these.

This will result in same output as it was with the previous one.
For example:

{% highlight ruby %}
%menu {
  background-color: white;
}

.header-menu {
  @extend %menu;
  color: black;
}

.footer-menu {
  @extend %menu;
  color: gray;
}

// Compiles to css

.header-menu, .footer-menu {
  background-color: white;
}

.header-menu {
  color: black;
}

.header-menu {
  color: gray;
}
{% endhighlight %}

The only difference is that the menu has disappeared from the output as it was just a placeholder selector. This is really helpful because you are using the things which should only be outputted into the resulting CSS. For more information, read about placeholders [here][placeholders].

Ok, Let’s wrap up. I wanted to cover Control directives in this as well, but that's a vast topic in itself. We will figure it out in my next blog. Stay tuned!

Thanks for reading. 😃

[more-info]: http://sass-lang.com/guide
[default-example]: https://anotheruiguy.gitbooks.io/sassintherealworld_book-i/handy-tools/default-flag.html

[custom-functions]: http://sass-lang.com/documentation/Sass/Script/Functions.html
[complex-selectors]: http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extending_complex_selectors
[placeholders]: http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholders
