import * as React from 'react';
import styled from 'styled-components';
import anime from 'animejs/lib/anime.es.js';
import AnimatedLetter from "./svg";
import { ReactComponent as Johnston } from "./images/johnston.svg"

// Styles
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LucasContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Links = styled.p`
  margin-top: 2em;
  line-height: 1.5em;
  text-align: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #1982C4;
  }
  &:active {
    color: #1982C4;
    text-decoration: underline;
  }
`;

// Animations
const randomiseDivs = async (delay, reset) => {
  await anime({
    targets: 'div',
    translateX: function() { return reset === true ? 0 : anime.random(-10, 10) + 'rem'; },
    translateY: function() { return reset === true ? 0 : anime.random(-3, 5) + 'rem'; },
    scale: function() { return reset === true ? 1 : anime.random(10,20) / 10; },
    rotate: function() { return reset === true ? 0 : anime.random(-360,360); },
    duration: function() { return anime.random(800,1200); },
    easing: 'easeInOutQuart',
    delay: `${delay != null && delay === true ? 400 : 0}`,
  }).finished;
};

const scaleLetters = async (delay, reset) => {
  await anime({
    targets: '.el',
    translateX: function() { return reset === true ? 0 : anime.random(-10, 10) + 'rem'; },
    translateY: function() { return reset === true ? 0 : anime.random(-3, 5) + 'rem'; },
    scale: function() { return reset === true ? 1 : anime.random(10,20) / 10; },
    rotate: function() { return reset === true ? 0 : anime.random(-360,360); },
    duration: function() { return anime.random(800,1200); },
    easing: 'easeInOutQuart',
    delay: `${delay != null && delay === true ? 400 : 0}`,
  }).finished;
};

// Logic
class App extends React.Component {
  animateLayout = async () => {
    await anime({targets: '#links', opacity: 0, duration: 0}).finished;
    await scaleLetters(false, false);
    scaleLetters(true, false);
    await randomiseDivs(true, false);
    await randomiseDivs(false, false);
    scaleLetters(false, false);
    await randomiseDivs(false, false);
    scaleLetters(false, true);
    await randomiseDivs(false, true);
    await anime({
      targets: '#links',
      opacity: [0, 100],
      duration: function() { return anime.random(800,1200); },
      easing: 'easeInOutQuart',
    }).finished;
  };

  async componentDidMount(){
    await this.animateLayout();
  }

  render() {
    return(
        <>
          <h1 style={{color: '#FFCA3A', height: '10px !important', width: 'auto', marginTop: '-10px'}}>lucas johnston</h1>
          <Container className="container">
            <LucasContainer>
              <AnimatedLetter letter="l" />
              <AnimatedLetter letter="u" />
              <AnimatedLetter letter="c" />
              <AnimatedLetter letter="a" />
              <AnimatedLetter letter="s" />
            </LucasContainer>
            <Johnston className="johnston"/>
            <Links id="links">
              <Link href="https://www.twitter.com/lucasjohnston">→ follow me on twitter</Link>
              <br />
              <Link href="https://www.twitter.com/umbermoney">→ follow umber on twitter</Link>
              <br />
              <Link href="https://www.umber.xyz">→ visit the umber site</Link>
              <br />
              <Link href="mailto:lucas@umber.xyz">→ ping me an email</Link>
            </Links>
          </Container>
        </>
    )
  }
}

export default App;