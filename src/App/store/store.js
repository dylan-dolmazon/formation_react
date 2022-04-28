
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