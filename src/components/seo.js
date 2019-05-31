// @flow
import * as React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

type Props = {
  description: string,
  lang: string,
  meta: Array<Object>,
  keywords: Array<string>,
  title: string,
}

function SEO({ description, lang, meta, keywords, title }: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultKeywords = [
    'lucas',
    'johnston',
    'lucas johnston',
    'monzo',
    'monzo bank',
    'google',
    'imperial',
    'imperial college',
    'starling',
    'starling bank',
    'software engineer',
    'product manager',
    'youngest engineer',
    'youngest software engineer',
    '17 years old',
    '18 years old',
    '17 year old',
    '18 year old',
    'programmer',
    'young programmer',
    'youngest programmer',
  ]
  const combinedKeywords = keywords.concat(defaultKeywords)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: '@' + site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          combinedKeywords.length > 0
            ? {
                name: `keywords`,
                content: combinedKeywords.join(`, `),
              }
            : [],
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

export default SEO
