import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default () => (
  <section className='bg-white black-70 bt bb b--black-10'>
    <div className='ph3 ph5-ns pt6 mb6'>
      <div className='mw9 center'>
        <h3 className='f6 fw6 mt0 mb4 tc ttu tracked'>Where can I find you online?</h3>
        <p className='mt0 mb4 tc'>
          <br/>
          <span><b>tl;dr: @lucasjohnston is my username everywhere I have an account, pretty much.</b></span>
          <br/><br/><br/><br/>
          <span><a style={{textDecoration: 'none', color: 'inherit'}} href='https://www.twitter.com/lucasjohnston'><FontAwesomeIcon icon={faTwitter}/> <b>@lucasjohnston</b> is my Twitter.</a></span>
          <br/><br/>
          <span><a style={{textDecoration: 'none', color: 'inherit'}} href='https://www.linkedin.com/in/lucasjohnston'><FontAwesomeIcon icon={faLinkedin}/> <b>lucasjohnston</b> is my LinkedIn profile.</a></span>
          <br/><br/>
          <span><a style={{textDecoration: 'none', color: 'inherit'}} href='https://www.github.com/lucasjohnston'><FontAwesomeIcon icon={faGithub}/> <b>lucasjohnston</b> is my account on GitHub.</a></span>
          <br/><br/>
          <span><a style={{textDecoration: 'none', color: 'inherit'}} href='https://www.lucasjohnston.co.uk'><FontAwesomeIcon icon={faGlobe}/> <b>lucasjohnston.co.uk</b> is my usual domain.</a></span>
          <br/><br/>
          <span><a style={{textDecoration: 'none', color: 'inherit'}} href='https://www.lucasco.de'><FontAwesomeIcon icon={faGlobe}/> <b>lucasco.de</b> is used for coding/development, and signing certs</a></span>
          <br/><br/><br/><br/>
          <span>
            I don't use social media too often, as I previously found it to be quite harmful to my mental health.<br/>
            However, I'm slowly easing back into using Twitter and some other social networks.<br/>
            If I have an account, I'll probably be <b>@lucasjohnston</b> (and in some cases, <b>@lucascode</b>).
          </span>
        </p>
      </div>
    </div>
  </section>
);