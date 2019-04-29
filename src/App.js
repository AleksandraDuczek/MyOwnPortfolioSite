import React from 'react';
import './App.css';
import {Header, Navigation, Drawer, Content, Layout} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div style={{height: '800px', position: 'relative' }}>
    <Layout fixedHeader>
        <Header className="header-color" style={{ color: '#000000'}} title={<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Raleway'}} to="/"><b> Portfolio </b></Link>} scroll>
            <Navigation style={{fontFamily: 'Raleway'}}>
                <Link to="/aboutme" className="link">About me</Link>
                <Link to="/projects">Student projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </Header>
        <Drawer>
            <Navigation style={{fontFamily: 'Raleway'}}>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Student projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content"> </div>
          <Main/>
          </Content>
    </Layout>
</div>

  );
}

export default App;
