import React from 'react';
import { connect } from "react-redux";
import store from '../store';
import { addScores, addPoint } from '../actions';
import { Cat } from './cat';
import { Link } from "react-router-dom";
import { Grid, Button, Typography } from '@material-ui/core';

class ConnectedDuel extends React.Component {

    constructor(props) {
        super(props)

        this.addPoint = this.addPoint.bind(this);
        this.state = {
            voted: false,
        }
    }

    addPoint(el) {
        const { duelCats } = this.props;
        store.dispatch(addPoint(el, duelCats));
        this.setState({ voted: true })
    }

    getRandomCats() {
        const { duelCats, winner, loser } = this.props;
        const { voted } = this.state;

        const getSecondCat = (cat1) => {
            const randomCat2 = duelCats[Math.floor(Math.random() * duelCats.length)];
            return randomCat2 === cat1 ? duelCats[Math.floor(Math.random() * duelCats.length)] : randomCat2;
        }

        const cat1 = !voted ? duelCats[Math.floor(Math.random() * duelCats.length)] : winner;
        const cat2 = !voted ? getSecondCat(cat1) : loser;

        return (
            <div style={{ width: '100%' }}>
                <Typography variant='h2' align='center' color='primary' style={{ margin: 10 }}> CAT MASH</Typography>
                <Typography variant='h4' align='center'  color='primary' style={{ margin: 10, fontStyle:'italic' }}>Vote for the cutest cat !!!</Typography>

                <Grid container justify="space-around" alignItems="center">
                    <Cat cat={cat1} onClick={() => this.addPoint(cat1)} />
                    <Cat cat={cat2} onClick={() => this.addPoint(cat2)} />
                </Grid>
            </div>

        )
    }

    render() {
        return (
            <Grid container justify="space-around" alignItems="center" >
                {this.props.duelCats.length > 0 ? this.getRandomCats() : undefined}
                <Link to='/list' style={{ textDecoration: 'none' }}><Button style={{ width: '90vw' }} variant="outlined" size="large" color="primary">GO TO SCORES</Button></Link>
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    const catScores = state.listView.catsWithVotes;
    const duelCats = state.listView.catList;
    const winner = state.duelView.winner;
    const loser = state.duelView.loser;
    return {
        duelCats, winner, loser, catScores
    };
}

const Duel = connect(mapStateToProps)(ConnectedDuel)


export default Duel;
