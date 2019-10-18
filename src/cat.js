import React from "react";
import { Card, CardActions, CardMedia } from '@material-ui/core';

export const Cat = ({cat, onClick}) => {
    const url = cat.url;
    const points = cat.count;
    return (
        <Card style={{height:'40vh', width: '40vw', margin: 20}} onClick={onClick}>
            <CardMedia
                style={{height: '80%',backgroundSize: 'cover'}}
                image={url}
                title="Cat picture"
            />
            <CardActions>
                {points}
            </CardActions>
        </Card>
    )
}