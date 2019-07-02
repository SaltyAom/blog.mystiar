/* Redux */
import { createStore } from 'redux'

const initState = {
}

const reducers = (state, action) => {
    switch(action.type){

        default:
            return {
                ...state
            }

        }
}

const store = createStore(reducers, initState);
export default store