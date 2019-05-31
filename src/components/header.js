// @flow
import * as React from 'react'

import {
  OuterHeader,
  InnerHeader,
  Title,
  Link,
  LeftHeader,
  NavigationItem,
  SocialContainer,
  Socials,
} from './header.style'

type Props = {
  siteTitle: string,
}

class Layout extends React.Component<Props> {
  static contextType = ThemeContext
  render() {
    return (
      <OuterHeader>
        <InnerHeader>
          <LeftHeader>
            <Title>
              <Link to="/">{siteTitle}</Link>
            </Title>
            <SocialContainer>
              <Socials>
                <li>twitter</li>
                <li>github</li>
                <li>instagram</li>
                <li>medium</li>
                <li>soundcloud</li>
              </Socials>
            </SocialContainer>
          </LeftHeader>
          <div>
            <NavigationItem>block one</NavigationItem>
            <NavigationItem>block two</NavigationItem>
            <NavigationItem>
              <button onClick={toggleDarkMode}>
                {darkMode ? 'sun' : 'moon'}
              </button>
            </NavigationItem>
          </div>
        </InnerHeader>
      </OuterHeader>
    )
  }
}

Header.defaultProps = {
  siteTitle: 'lucas johnston',
}

export default Header
