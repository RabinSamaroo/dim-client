import React from 'react';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <React.StrictMode>
      <div className="min-h-full bg-slate-900">
        {/* <Navbar /> */}
        <div className="pb-10"></div>
        <Content />
        <Footer />
      </div>
    </React.StrictMode>
  );
}

export default App;
