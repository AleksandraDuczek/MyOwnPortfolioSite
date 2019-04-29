import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render () {
        return ( 
             <div className="contact-body">
             <Grid className="contact-grid">
             <h2 className="contact-text">Contact me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'verdana'}}>
                     <i className="fa fa-phone-square" aria-hidden="true"/>
                     {"\n"}{"\n"} +48 795 257 525
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'verdana'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    {"\n"}{"\n"} aleksandraduczek231@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
             </Grid>  </div> 
            )
        
    }
}

export default Contact;