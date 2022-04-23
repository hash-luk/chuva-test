import React from 'react';
import Header from './components/header';
import Main from './components/main-content';
import SidebarNav from './components/sidebar-nav/Index';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <SidebarNav />
    </div>
  );
}

export default App;
