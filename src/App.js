import React from 'react';
import './App.css';
import store from './store';
import { loadCats } from './actions';
import api from './api';
import CatList from './components/catList';
import Duel from './components/duel';
import { HashRouter, Route } from 'react-router-dom';

class App extends React.Component {
  syncData = async () => {
    const cats = await api.getCats()
    store.dispatch(loadCats(cats))
  }


  componentDidMount() {
    // this.unsubscribe = store.subscribe(() => this.forceUpdate())
    this.syncData()
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <HashRouter basename='/'>
        <Route exact path="/" component={Duel}/>
        <Route path="/list" component={CatList}/>
      </HashRouter>

    )
  }

}

export default App;