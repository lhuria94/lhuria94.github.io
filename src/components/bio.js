/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import tw from "tailwind.macro"
import styled from "@emotion/styled"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div>
      <div
        style={{
          display: `flex`,
          marginBottom: rhythm(2.5),
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <p>
          Written by <strong>{author.name}</strong> {author.summary}
          {` `}
          <a href={`https://twitter.com/${social.twitter}`}>
            You should follow him on Twitter
          </a>
        </p>
      </div>
      <MyComponent>
        <h4 css={tw`font-semibold text-sm leading-snug truncate`}>
          Inline TW classes
        </h4>
      </MyComponent>
    </div>
  )
}

const MyComponent = styled.div`
  ${tw`bg-white
  rounded-lg
  overflow-hidden
  border`}
  height: 409px;
  img {
    height: 265px;
    object-fit: cover;
    object-position: center;
  }
`

export default Bio
