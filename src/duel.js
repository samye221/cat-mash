import React from 'react';
import { connect } from "react-redux";
import store from './store';
import { addScores, addPoint } from './actions';
import { Cat } from './cat';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';

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

        const cat1 = !voted ? duelCats[Math.floor(Math.random() * duelCats.length)] : winner;
        const cat2 = !voted ? duelCats[Math.floor(Math.random() * duelCats.length)] : loser;

        return (
            <div style={{ display: 'flex', flexDirection: 'row', margin: 4, justifyContent: 'center' }}>
                <Cat cat={cat1} onClick={() => this.addPoint(cat1)} />
                <Cat cat={cat2} onClick={() => this.addPoint(cat2)} />
            </div>
        )
    }

    render() {
        return (
            <div style={{ margin: 8 }}>
                {this.props.duelCats.length > 0 ? this.getRandomCats() : undefined}
                <button><Link to='/list'>TO LIST</Link></button>
            </div>

        )

    }
}

const mapStateToProps = state => {
    const cats = state.listView.catList;
    const catScores = state.listView.catsWithVotes;
    const duelCats = cats;
    const winner = state.duelView.winner;
    const loser = state.duelView.loser;
    return {
        duelCats, winner, loser, catScores
    };
}

const Duel = connect(mapStateToProps)(ConnectedDuel)


export default Duel;
