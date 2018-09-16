import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

export default () => (
  <footer className='w-100 pa3 ph4-ns bg-white'>
    <div className='db dt-ns mw9 mb3 center w-100'>
      <div className='db dtc-ns v-mid tl w-50'>
        <p className='fw6 f3'>Get in touch!</p>
          <ul className="fa-ul">
            <li>
              <a href='mailto:lucas@lucasjohnston.co.uk' className='link dim black dib fw6 f4 mt0'>
                <span className="fa-li">
                  <FontAwesomeIcon icon={faEnvelope}/>
                </span>
              lucas@lucasjohnston.co.uk
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/lucasjohnston' className='link dim black dib fw6 f4 mt0'>
                <span className="fa-li">
                  <FontAwesomeIcon icon={faLinkedin}/>
                </span>
                lucasjohnston
              </a>
            </li>
          </ul>
        These are the channels I'm most responsive on.
      </div>
    </div>
  </footer>
);
