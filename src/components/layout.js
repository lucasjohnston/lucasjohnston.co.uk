// @flow
import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Body } from './layout.style'
import Header from './header'
import ThemeProvider from './themeContext'

type Props = {
  children?: React.Node,
}

type GQLProps = {
  site: {
    siteMetadata: {
      title: string,
    },
  },
}

class Layout extends React.Component<Props> {
  render() {
    const { children } = this.props

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data: GQLProps) => (
          <ThemeProvider>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Body>
              <main>{children}</main>
              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </Body>
          </ThemeProvider>
        )}
      />
    )
  }
}

export default Layout
