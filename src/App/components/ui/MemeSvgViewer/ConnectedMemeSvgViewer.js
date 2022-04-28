import React from 'react';
import MemeSvgViewer from './MemeSvgViewer'
import {connect} from 'react-redux'

function mstp(s,p){
    return{
        ...p,
        meme:s.current,
    }
}

function mdtp(d){
    return {}
}

export default connect(mstp,mdtp)(MemeSvgViewer)