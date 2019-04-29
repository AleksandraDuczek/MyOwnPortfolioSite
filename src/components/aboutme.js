import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from './logo.jpg';

class About extends Component {
    render () {
        return ( 
            <div className="about-body">
            <Grid className="about-grid">
            <Cell col={6}>
            <h2 style={{fontSize: '55px', fontFamily: 'Courgette'}}> Aleksandra Duczek </h2> 
            <img src={logo} alt="Logo" className='avatar' />;
             </Cell>
            <Cell col={6}> 
            <p style={{ fontFamily: 'Raleway', width: '75%', margin: 'auto', paddingTop: '4em', fontSize: '25px', color: 'white' }}> 
            Third year student of Electronics and Telecommunications,
           member of the scientific circle "IT Management" and the Local
           Government Student. Currently attend web development
           course and application development in React Native.
           </p>
           </Cell>
            </Grid>  </div> 
           )
        
    }
}

export default About;