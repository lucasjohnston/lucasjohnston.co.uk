import React from 'react';
import atkinsLogo from '../../assets/atkins.png';
import imperialLogo from '../../assets/imperial.png';
import blocksLogo from '../../assets/blocks.jpg';
import googleLogo from '../../assets/google.jpg';
import starlingLogo from '../../assets/starling.jpg';
import monzoLogo from '../../assets/monzo.png';

const Clients = () => (
  <div>
    <div className='flex flex-wrap items-center justify-center'>
      <div className='dtc pa2 pa3-l'>
        <a href='https://www.monzo.com'>
          <img alt='Monzo' className='br2 db w4' src={monzoLogo}/>
        </a>
      </div>
      <div className='dtc pa2 pa3-l'>
        <a href='https://www.starlingbank.com'>
          <img alt='Starling Bank' className='br2 db w4' src={starlingLogo}/>
        </a>
      </div>
      <div className='dtc pa2 pa3-l'>
        <a href='https://www.google.com'>
          <img alt='Google' className='br2 db w4' src={googleLogo}/>
        </a>
      </div>
      <div className='dtc pa2 pa3-l'>
        <a href='https://www.chooseblocks.com'>
          <img alt='BLOCKS Wearables' className='br2 db w4' src={blocksLogo}/>
        </a>
      </div>
      <div className='dtc pa2 pa3-l'>
        <a href='https://www.imperial.ac.uk'>
          <img alt='Imperial College London' className='br2 db w4' src={imperialLogo}/>
        </a>
      </div>
      <div className='dtc pa2 pa3-l'>
        <a href='https://www.atkinsglobal.com'>
          <img alt='ATKINS Global' className='br2 db w4' src={atkinsLogo}/>
        </a>
      </div>
    </div>
  </div>
);

export default () => (
  <section className='bg-white black-70 bt bb b--black-10'>
    <div className='ph3 ph5-ns pt6 mb6'>
      <div className='mw9 center'>
        <h3 className='f6 fw6 mt0 mb4 tc ttu tracked'>Company Portfolio</h3>
        <Clients/>
      </div>
    </div>
  </section>
);
