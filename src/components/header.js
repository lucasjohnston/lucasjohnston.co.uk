import React from 'react';
import MediaQuery from 'react-responsive';

const Nav = (props) => (
  <nav className={`${props.desktop ? 'tl-ns' : 'tr-ns'} db dtc-ns v-mid tl w-100 mt2 mt0-ns`}>
    <a title='Public Keys' href='https://gist.github.com/lucasjohnston/66187e634ae2b8e2be866e93af7ba688'
       className='f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib'>
      Public Keys
    </a>
    <a title='GitHub' href='https://github.com/lucasjohnston'
       className='f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib'>
      GitHub
    </a>
  </nav>
);

const Logo = (props) => (
  <div className='db dtc-ns v-mid tl w-50'>
    <a href='/' title='Home' className={`${props.desktop ? 'f3' : 'f3-ns mb1'} dib fw6 mt0 link dim`}>
      <span className='black'>lucas johnston</span>
    </a>
  </div>
);

export default () => (
  <div>
    <MediaQuery query='(max-width: 1024px)'>
      <header className='w-100 pa3 ph4-ns bg-white'>
        <div className='db dt-ns mw9 mb3 center w-100'>
          <Logo desktop/>
        </div>
        <div className='db dt-ns mw9 center w-100'>
          <Nav desktop/>
        </div>
      </header>
    </MediaQuery>
    <MediaQuery query='(min-width: 1024px)'>
      <header className='w-100 pa3 ph5-ns bg-white'>
        <div className='db dt-ns mw9 center w-100'>
          <Logo/>
          <Nav/>
        </div>
      </header>
    </MediaQuery>
  </div>
);