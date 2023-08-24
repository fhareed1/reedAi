import {
  Footer,
  Blog,
  Feature,
  Header,
  Possibility,
  WhatGPT3,
} from './container';
import { CTA, Navbar, Brand } from './components';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
