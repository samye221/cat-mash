import React from 'react';
import './App.css';
import store from './store';
import { loadCats } from './actions';
import api from './api';
import CatList from './catList';
import Duel from './duel';
import { Router } from '@reach/router';

class App extends React.Component {
  syncData = async () => {
    const cats = await api.getCats()
    store.dispatch(loadCats(cats))
  }


  componentDidMount() {
    // this.unsubscribe = store.subscribe(() => this.forceUpdate())
    this.syncData()
  }

  // componentWillUnmount() {
  //   this.unsubscribe()
  // }

  render() {
    return (
      <Router>
        <Duel path='/' />
        <CatList path='/list' />
      </Router>

    )
  }

}

export default App;