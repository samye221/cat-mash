import React from "react";
import { connect } from "react-redux";
import {List, ListItem, ListItemAvatar, ListItemText, Avatar} from '@material-ui/core';

const mapStateToProps = state => {
    const cats = state.listView.catList;
    cats.sort((a, b) => b.count - a.count)
    return { cats};
};
const ConnectedList = ({ cats }) => (
    <List>
        {cats.map(el => (
            <ListItem key={el.id}>
                <ListItemAvatar>
                    <Avatar src={el.url} alt='cat picture'></Avatar>
                </ListItemAvatar>
                <ListItemText>SCORE: {el.count}</ListItemText>
            </ListItem>
            // <img
            //     key={el.id}
            //     src = {el.url} 
            //     alt = ''/>
        ))}
    </List>
);
const CatList = connect(mapStateToProps)(ConnectedList);

export default CatList