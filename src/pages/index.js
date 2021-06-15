import * as React from "react"
import anime from "animejs/lib/anime.es.js"
import AnimatedLetter from "../components/svg"
import Johnston from "../images/johnston.svg"
import {
  Container,
  LoadingCopy,
  Links,
  LucasContainer,
  randomiseDivs,
  scaleLetters,
  TitleContainer,
} from "../components/style"
import "../index.css"

class Index extends React.Component {
  animateLayout = async () => {
    await anime({ targets: "#links", opacity: 0, duration: 0 }).finished
    await scaleLetters(false, false)
    scaleLetters(true, false)
    await randomiseDivs(true, false)
    await randomiseDivs(false, false)
    scaleLetters(false, false)
    await randomiseDivs(false, false)
    scaleLetters(false, true)
    await randomiseDivs(false, true)
    await anime({
      targets: "#title",
      marginTop: [0, "-6em"],
      duration: 600,
      easing: "easeInOutQuart",
    }).finished
    document.querySelector("#links").style.display = "block"
    anime({
      targets: "#title",
      marginTop: 0,
      duration: 0,
    })
    document.querySelector("#loading-copy").style.display = "block"
    document.querySelector("#loading-copy").style.visibility = "visible"
    document.querySelector("#loading-copy").style.opacity = 100
    await anime({
      targets: "#links",
      opacity: [0, 100],
      duration: function() {
        return anime.random(700, 900)
      },
      easing: "easeInOutQuart",
    }).finished
    await new Promise(resolve => setTimeout(resolve, 400))
    window.location.href = "https://portfolio.lucasjohnston.co.uk"
  }

  async componentDidMount() {
    await this.animateLayout()
  }

  render() {
    return (
      <>
        <h1
          style={{
            color: "#FBF8F3",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: "-1",
            padding: 0,
            height: "10px !important",
            marginTop: "-10px !important",
          }}
        >
          lucas johnston
        </h1>
        <Container className="container">
          <TitleContainer id="title">
            <LucasContainer>
              <AnimatedLetter letter="l" />
              <AnimatedLetter letter="u" />
              <AnimatedLetter letter="c" />
              <AnimatedLetter letter="a" />
              <AnimatedLetter letter="s" />
            </LucasContainer>
            <Johnston className="johnston" />
          </TitleContainer>
          <Links id="links">
            <LoadingCopy id="loading-copy">loading...</LoadingCopy>
          </Links>
        </Container>
      </>
    )
  }
}

export default Index
