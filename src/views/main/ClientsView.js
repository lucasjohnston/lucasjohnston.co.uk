import React from 'react';
import MediaQuery from 'react-responsive';

const Clients = (props) => (
  props.desktop ?
    <div>
      <div className='dt dt--fixed mw6 mw7-l center'>
        <div className='dtc pa2 pa3-l'>
          <a href='https://www.starlingbank.com'>
            <img alt='Starling Bank' className='br2 db w-100' src='https://pbs.twimg.com/profile_images/1016625432391749632/QI0ODYP0.jpg'/>
          </a>
        </div>
        <div className='dtc pa2 pa3-l'>
          <a href='https://www.google.com'>
            <img alt='Google' className='br2 db w-100' src='https://pbs.twimg.com/profile_images/972154872261853184/RnOg6UyU.jpg'/>
          </a>
        </div>
      </div>
      <div className='dt dt--fixed mw6 mw7-l center'>
        <div className='dtc pa2 pa3-l'>
          <a href='https://www.chooseblocks.com'>
            <img alt='BLOCKS Wearables' className='br2 db w-100' src='https://pbs.twimg.com/profile_images/884060252655804416/vzN-O0pK.jpg'/>
          </a>
        </div>
        <div className='dtc pa2 pa3-l'>
          <a href='https://www.imperial.ac.uk'>
            <img alt='Imperial College London' className='br2 db w-100' src='https://pbs.twimg.com/profile_images/1016226074378887168/nQbLFtCO.jpg'/>
          </a>
        </div>
        <div className='dtc pa2 pa3-l'>
          <a href='https://www.atkinsglobal.com'>
            <img alt='ATKINS Global' className='br2 db w-100' src='https://maas-scotland.com/wp-content/uploads/2017/10/atkins-square.png'/>
          </a>
        </div>
      </div>
    </div> :
    <div>
      <div className='flex flex-wrap items-center justify-center'>
        <div className='dtc pa2 pa3-l'>
          <a href='https://www.starlingbank.com'>
            <img alt='Starling Bank' className='br2 db w4' src='https://pbs.twimg.com/profile_images/1016625432391749632/QI0ODYP0.jpg'/>
          </a>
        </div>
        <div className='dtc pa2 pa3-l'>
          <a href='https://www.google.com'>
            <img alt='Google' className='br2 db w4' src='https://pbs.twimg.com/profile_images/972154872261853184/RnOg6UyU.jpg'/>
          </a>
        </div>
        <div className='dtc pa2 pa3-l'>
          <a href='https://www.chooseblocks.com'>
            <img alt='BLOCKS Wearables' className='br2 db w4' src='https://pbs.twimg.com/profile_images/884060252655804416/vzN-O0pK.jpg'/>
          </a>
        </div>
        <div className='dtc pa2 pa3-l'>
          <a href='https://www.imperial.ac.uk'>
            <img alt='Imperial College London' className='br2 db w4' src='https://pbs.twimg.com/profile_images/1016226074378887168/nQbLFtCO.jpg'/>
          </a>
        </div>
        <div className='dtc pa2 pa3-l'>
          <a href='https://www.atkinsglobal.com'>
            <img alt='ATKINS Global' className='br2 db w4' src='https://maas-scotland.com/wp-content/uploads/2017/10/atkins-square.png'/>
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
        <MediaQuery query='(max-width: 960px)'>
          <Clients desktop/>
        </MediaQuery>
        <MediaQuery query='(min-width: 960px)'>
          <Clients/>
        </MediaQuery>
      </div>
    </div>
  </section>
);
