import { combineReducers } from 'redux';
import listView from './catList';
import duelView from './duelView';

const reducer = combineReducers({
    listView,
    duelView,
})

export default reducer