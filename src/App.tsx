import React from 'react';
import Discussions from './components/discussions';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main-content';
import ResponsiveMenu from './components/responsivemenu';
import Resume from './components/resume';
import SidebarNav from './components/sidebar-nav/Index';

function App() {
  return (
    <div className="App">
      <ResponsiveMenu />
      <Header />
      <Main />
      <Resume />
      <Discussions />
      <Footer />
      <SidebarNav />
    </div>
  );
}

export default App;
