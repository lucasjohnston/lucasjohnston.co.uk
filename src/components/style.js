import styled from "styled-components"
import anime from "animejs/lib/anime.es.js"
import { Link as GLink } from "gatsby"

// UI
export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LucasContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const Links = styled.p`
  height: 7em !important;
  margin-top: 2em;
  line-height: 1.5em;
  text-align: center;
  display: none;
`

export const LoadingCopy = styled.p`
  font-family: Big Caslon, Goudy Old Style, Palatino, Palatino Linotype,
    Palatino LT STD, Book Antiqua, Georgia, serif;
`

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #1982c4;
  }
  &:active {
    color: #1982c4;
    text-decoration: underline;
  }
`

export const InternalLink = styled(GLink)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #1982c4;
  }
  &:active {
    color: #1982c4;
    text-decoration: underline;
  }
`

// Animations
export const randomiseDivs = async (delay, reset) => {
  await anime({
    targets: "div",
    translateX: function() {
      return reset === true ? 0 : anime.random(-10, 10) + "rem"
    },
    translateY: function() {
      return reset === true ? 0 : anime.random(-3, 5) + "rem"
    },
    scale: function() {
      return reset === true ? 1 : anime.random(10, 20) / 10
    },
    rotate: function() {
      return reset === true ? 0 : anime.random(-360, 360)
    },
    duration: function() {
      return anime.random(400, 600)
    },
    easing: "easeInOutQuart",
    delay: `${delay != null && delay === true ? 200 : 0}`,
  }).finished
}

export const scaleLetters = async (delay, reset) => {
  await anime({
    targets: ".el",
    translateX: function() {
      return reset === true ? 0 : anime.random(-10, 10) + "rem"
    },
    translateY: function() {
      return reset === true ? 0 : anime.random(-3, 5) + "rem"
    },
    scale: function() {
      return reset === true ? 1 : anime.random(10, 20) / 10
    },
    rotate: function() {
      return reset === true ? 0 : anime.random(-360, 360)
    },
    duration: function() {
      return anime.random(400, 600)
    },
    easing: "easeInOutQuart",
    delay: `${delay != null && delay === true ? 200 : 0}`,
  }).finished
}
