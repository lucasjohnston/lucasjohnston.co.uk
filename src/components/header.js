import React from 'react';
import MediaQuery from 'react-responsive';

const Nav = (props) => (
  props.right ?
    <nav className='db dtc-ns v-mid w-100 tl tl-ns mt2 mt0-ns'>
      <a title='Public Keys' href='https://gist.github.com/lucasjohnston/66187e634ae2b8e2be866e93af7ba688'
         className='f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib'>
        Public Keys
      </a>
      <a title='GitHub' href='https://github.com/lucasjohnston'
         className='f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib'>
        GitHub
      </a>
    </nav>
  : <nav className='db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns'>
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
    {
      props.large ?
        <a href='/' className='dib f3 fw6 mt0 link dim' title='Home'>
          <span className='black'>lucas johnston</span>
        </a> :
        <a href='/' className='dib f3-ns fw6 mt0 mb1 link dim' title='Home'>
          <span className='black'>lucas johnston</span>
        </a>
    }
  </div>
);

export default () => (
  <div>
    <MediaQuery query='(max-width: 1024px)'>
      <header className='w-100 pa3 ph4-ns bg-white'>
        <div className='db dt-ns mw9 mb3 center w-100'>
          <Logo large/>
        </div>
        <div className='db dt-ns mw9 center w-100'>
          <Nav right/>
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