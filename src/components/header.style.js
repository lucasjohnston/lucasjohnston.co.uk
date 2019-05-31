// @flow
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import { GUTTER_MARGIN } from '../global.style'

// Components
const OuterHeader = styled.header`
  background-color: rebeccapurple;
  margin-bottom: 1.45rem;
`

const InnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.45rem ${GUTTER_MARGIN};
`

const Title = styled.h2`
  margin: 0;
`

const Link = styled(GatsbyLink)`
  color: white;
  text-decoration: none;
`

const LeftHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const NavigationItem = styled.div`
  display: inline;
  background-color: white;
  padding-left: 10px;
`

const SocialContainer = styled.div`
  display: table;
  margin-top: 0.5rem;
`

const Socials = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: inline;
    padding-right: 10px;
  }
`

export {
  OuterHeader,
  InnerHeader,
  Title,
  Link,
  LeftHeader,
  NavigationItem,
  SocialContainer,
  Socials,
}
