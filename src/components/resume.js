import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {render () {
    return ( 
        <div className="resume-body">
        <Grid className="resume-grid">
        <Cell col={6}>
        <h2 style={{fontSize: '60px', fontFamily: 'Raleway', paddingTop: '2em'}}> Courses: </h2> 
        <p style={{paddingTop: '2em', fontFamily: 'Raleway', fontSize: '20px'}}> ● Web development - basic </p>
        <p style={{fontFamily: 'Raleway', fontSize: '20px'}}>Organized by OKE Software </p>
        <p style={{fontFamily: 'Raleway', fontSize: '20px'}}>● Udemy - Learn to Program in Javascript: Beginner to Pro </p>
        <p style={{fontFamily: 'Raleway', fontSize: '20px'}}>● Udemy - JavaScript Fundamentals</p>
        </Cell>
        <Cell col={6}> 
        <h2 style={{fontSize: '60px', fontFamily: 'Raleway',  paddingTop: '2em'}}> Technical Skills: </h2>
        <h4 style={{fontFamily: 'Raleway', fontSize: '30px'}}> Beginner level: </h4>
        <p style={{paddingTop: '2em', fontFamily: 'Raleway', fontSize: '20px'}}> ● <b> Programming languages: </b> HTML, CSS, JavaScript, Java,  C++ </p>
        <p style={{fontFamily: 'Raleway', fontSize: '20px'}}> ● <b> Frameworks:</b>  React, React Native</p>
       </Cell>
        </Grid>  </div> 
       )
    
}
}

export default Resume;