import React from "react";
import { Grid, Typography } from '@material-ui/core';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    hover: {
        '&:hover': {
            cursor: 'pointer',
            opacity: 0.5,
        },
    }
});

export const Cat = ({ cat, onClick }) => {
    const url = cat.url;
    const points = cat.count;
    const classes = useStyles();
    return (
        <Grid style={{ margin: 30 }} direction='column' justify='center' >
            <div className={classes.hover} style={{ height: 400, width: 400, backgroundImage: `url(${url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} onClick={onClick}>

            </div >
            <Typography variant='body1' color='primary' align='center' style={{ margin: 10 }}>
                {points > 1 ? `${points} points` : `${points} point`}
            </Typography>
        </Grid>

    )
}