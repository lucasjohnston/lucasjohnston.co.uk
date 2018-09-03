import React from 'react';
import Header from './components/header';
import Home from './views/Home';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <div className='w-100 sans-serif'>
        <Header/>
        <Home/>
        <Footer/>
      </div>
    )
  }
}

export default App;