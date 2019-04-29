import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render () {
        return ( 
             <div style = {{width: '100%', margin: 'auto'}}> 
            <Grid className="landing-grid">
            <Cell col={12}>
            <img 
            src="https://images.vexels.com/media/users/3/140384/isolated/preview/fa2513b856a0c96691ae3c5c39629f31-girl-profile-avatar-1-by-vexels.png"
            alt="avatar"
            className="avatar-img"
            />
            <div className="banner-text">
                <h1 style={{fontFamily: 'Raleway'}}>  Front End Junior Developer </h1>

            <hr/>    
            <p style={{fontFamily: 'Raleway'}}> HTML | CSS | JavaScript </p>

            <div className="social-links"> 

            { /* LinkedIn */}
            <a href="https://www.linkedin.com/in/aleksandra-duczek-6b98ab174/" target="_blank"> 
            <i class="fa fa-linkedin-square"  aria-hidden="true"> </i>
            </a>

            { /* GitHub */}
            <a href="https://github.com/AleksandraDuczek" rel="noopener noreferrer" target="_blank"> 
            <i class="fa fa-github-square"  aria-hidden="true"> </i>
            </a>

            </div>

            </div>


            </Cell>
            </Grid>
             </div> 
            )
        
    }
}

export default Landing;