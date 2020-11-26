import React from 'react'

import Layout from '../components/Layout/'
import SEO from '../components/Seo'
import SocialLinks from '../components/SocialLinks'

import { MainContent } from '../styles/base'

const AboutPage = () => (
  <Layout>
    <SEO
      title="About me"
      description="I am a passionate programmer and open-source enthusiast from India. I have experience in web development using PHP, Drupal, MySQL, and JavaScript. While not working, I like to spend my time coding personal projects, learning, reading blogs, blogging, travelling etc. My specific areas of interest include Devops, Javascript and PHP programming."
    />
    <MainContent>
      <h1>About me</h1>
      <p>
      I am a passionate programmer and open-source enthusiast from India. I have experience in web development using PHP, Drupal, MySQL, and JavaScript. While not working, I like to spend my time coding personal projects, learning, reading blogs, blogging, travelling etc. My specific areas of interest include Devops, Javascript and PHP programming.
      </p>

      <h2>Skills</h2>

      <ul>
        <li>PHP</li>
        <li>Drupal</li>
        <li>Javascript</li>
        <li>ReactJS</li>
        <li>Material UI</li>
        <li>CSS (Styles, Sass, Less)</li>
        <li>CSS Frameworks (Bootstrap, Foundation)</li>
        <li>HTML</li>
        <li>Responsive Designs (Mobile First)</li>
        <li>Gulp - Compass</li>
        <li>Git</li>
        <li>MSSQL, MySQL, MongoDB</li>
        <li>Scrum and Kanban, Agile</li>
        <li>Continuous Integration</li>
        <li>Vagrant</li>
        <li>Docker</li>
        <li>CircleCI</li>
      </ul>

      <h2>Contact</h2>

      <p>
        You can contact me through any of my social networks
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage
