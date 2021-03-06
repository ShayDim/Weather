import {FETCH_WEATHER} from '../actions/index';


export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
        //return state.concat([action.payload.data]);
            // we always return a new state. We don't manipulate existing state object. NO state.push(action.payload.data); !!!
            return [action.payload.data, ...state];
    }
    return state;
}