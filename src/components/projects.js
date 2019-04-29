import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories () {
        if(this.state.activeTab === 0){
            return (
            <div className="projects-grid-background"> 
              <Card shadow={19} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#FFFFFF', height: '170px', background: 
              'url(https://cdn.shopify.com/s/files/1/1321/6369/products/duck-js_e409da90-1e21-42a5-85a0-beae47b793de_1024x1024.png?v=1518578459) center/cover '}}> 
              </CardTitle>
              <CardText style={{color: '#black'}}>
              <strong> JavaScript Project - </strong> Website about applications - using the google maps API, displaying the map with the selected place. Adding a JSON file with my own data, displaying this data on the page. Working with local storage - creating a list of likes.
              </CardText>
              <CardActions border> 
              <Button colored href="https://github.com/AleksandraDuczek/website_about_application/tree/master/Website_about_application"> Github </Button> 
              </CardActions>
              <CardMenu style={{color: '#black'}}> 
              <IconButton name="share"/> </CardMenu>
              </Card>
              </div>
            )
            
        }
        else if (this.state.activeTab === 1) { 
            return (
                <div className="projects-grid-background"> 
                  <Card shadow={19} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#FFFFFF', height: '170px', background: 
                  'url(https://cdn-images-1.medium.com/max/1200/1*ZGEUEy_SifxtHG-CSAWsZA.png) center/cover '}}> 
                  </CardTitle>
                  <CardText style={{color: '#black'}}>
                  <strong> Java Project - </strong> Educational game “Healthy Pony”, aimed at learning sensitivity to harm, visual and motor coordination exercises.
                  </CardText>
                  <CardActions border> 
                  <Button colored href="https://github.com/AleksandraDuczek/game"> Github </Button> 
                  </CardActions>
                  <CardMenu style={{color: '#black'}}> 
                  <IconButton name="share"/> </CardMenu>
                  </Card>
                  </div>
                )
        }

        else if (this.state.activeTab === 2) { 
            return (
                <div className="projects-grid-background"> 
                  <Card shadow={19} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#FFFFFF', height: '170px', background: 
                  'url(http://pl26305.stud.zpsb.edu.pl/wp-content/uploads/2018/03/c-plus-plus-logo.png) center/cover '}}> 
                  </CardTitle>
                  <CardText style={{color: '#black'}}>
                  <strong> C++ rogram  </strong> allows users to play Sudoku.
                  </CardText>
                  <CardActions border> 
                  <Button colored href="https://github.com/AleksandraDuczek/game"> Github </Button> 
                  </CardActions>
                  <CardMenu style={{color: '#black'}}> 
                  <IconButton name="share"/> </CardMenu>
                  </Card>
                  </div>
                )
            }
    }

   

    render() {
        return(
          <div>
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
              <Tab>JavaScript</Tab>
              <Tab>Java</Tab>
              <Tab>C++</Tab>
            </Tabs>
              <Grid>
                <Cell col={12}>
                  <div className="content">{this.toggleCategories()}</div>
                </Cell>
              </Grid>
          </div>
        )
      }
    }

export default Projects;