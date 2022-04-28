import {createStore} from 'redux'
/**
 * Enum des actions pour le reducer
 */

export const ACTIONS_CURRENT = Object.freeze({
    UPDATE_CURRENT: 'UPDATE_CURRENT',
    CLEAR_CURRENT: 'CLEAR_CURRENT',
})

export const  initialCurrentMeme={
    text: "",
    x: 0,
    y: 20,
    fontSize: 20,
    fontWeight: "500",
    color: "#000000",
    imageId: -1,
    underline: false,
    italic: false,
    name: ""
}

function currentReducer(state=initialCurrentMeme,action){
    switch(action.type){
        case ACTIONS_CURRENT.UPDATE_CURRENT:return {...state,...action.value}
        case ACTIONS_CURRENT.CLEAR_CURRENT:return {...initialCurrentMeme}
        default: return state
    }
}

const store=createStore(currentReducer)
store.subscribe(()=>{
    //m'informe lorsque qlq accéde au store
    //console.trace(store.getState());
})

export default store

/*
store.dispatch({type:ACTIONS_CURRENT.UPDATE_CURRENT, value:{imageId:1,color:'blue'}})
store.dispatch({type:ACTIONS_CURRENT.CLEAR_CURRENT})
store.dispatch({type:ACTIONS_CURRENT.UPDATE_CURRENT, value:{text:'hello',imageId:1,color:'tomato'}})

let state= currentReducer(undefined,{type:'init '})
console.log(state)
state = currentReducer(state,{type:ACTIONS_CURRENT.UPDATE_CURRENT, value:{imageId:1,color:'blue'}})
console.log(state)
state = currentReducer(state,{type:ACTIONS_CURRENT.CLEAR_CURRENT})
console.log(state)
*/