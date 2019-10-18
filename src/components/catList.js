import React from "react";
import { connect } from "react-redux";
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Grid, Button, AppBar,Toolbar } from '@material-ui/core';
import { Link } from "react-router-dom";

const mapStateToProps = state => {
    const cats = state.listView.catList;
    cats.sort((a, b) => b.count - a.count)
    return { cats };
};
const ConnectedList = ({ cats }) => (
    <Grid container direction='row' justify='center' alignItems='center'>
        <div >
        <AppBar position='fixed' >
            <Toolbar style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
            
            <Link to='/' style={{ textDecoration: 'none'}}><Button size="large" >BACK TO VOTING</Button></Link>
            <h1>SCORES</h1>
            </Toolbar>
            
        </AppBar>
        </div>
        
        <List style={{marginTop:120}}>
            {cats.map(el => (
                <ListItem key={el.id}>
                    <ListItemAvatar>
                        <Avatar src={el.url} alt='cat picture' style={{ height: 100, width: 100 }}/>
                    </ListItemAvatar>
                    <ListItemText style={{ margin: 30 }}>SCORE: {el.count}</ListItemText>
                </ListItem>
            ))}
        </List>
    </Grid>

);
const CatList = connect(mapStateToProps)(ConnectedList);

export default CatList