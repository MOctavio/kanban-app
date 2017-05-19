import {combineReducers} from 'redux';
import notes from './note-reducer';

const rootReducer = combineReducers({notes});

export default rootReducer;
