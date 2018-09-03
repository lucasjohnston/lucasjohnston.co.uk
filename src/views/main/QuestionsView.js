import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default () => (
  <section className='bg-white black-70 bt bb b--black-10'>
    <div className='ph3 ph5-ns pt6 mb6'>
      <div className='mw9 center'>
        <h3 className='f6 fw6 mt0 mb4 tc ttu tracked'>Where are your socials?</h3>
        <p className='mt0 mb4 tc'>I no longer use social media, as I found it to be detrimental to my mental health.</p>
        <br/>
        <br/>
        <h3 className='f6 fw6 mt0 mb4 tc ttu tracked'>Okay then, where can I find you online?</h3>
        <p className='mt0 mb4 tc'>
          <span><a style={{textDecoration: 'none', color: 'inherit'}} href='https://www.github.com/lucasjohnston'><FontAwesomeIcon icon={faGithub}/> <b>lucasjohnston</b> is my GitHub.</a></span>
          <br/><br/>
          <span><a style={{textDecoration: 'none', color: 'inherit'}} href='https://www.lucasjohnston.co.uk'><FontAwesomeIcon icon={faGlobe}/> <b>lucasjohnston.co.uk</b> is my usual domain.</a></span>
          <br/><br/>
          <span><a style={{textDecoration: 'none', color: 'inherit'}} href='https://www.lucasco.de'><FontAwesomeIcon icon={faGlobe}/> <b>lucasco.de</b> is used for coding/development, and signing certs</a></span>
        </p>
      </div>
    </div>
  </section>
);