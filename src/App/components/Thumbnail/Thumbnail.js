import React from 'react'
import { connect } from 'react-redux'
import MemeSvgViewer from '../ui/MemeSvgViewer/MemeSvgViewer'
import style from './Thumbnail.module.scss'
export const Thumbnail = (props) => {
  return (
    <div className={style.Thumbnail} test-id="Thumbnail">
      {props.memes.map((e,i)=> 
        <MemeSvgViewer 
          key={`th${i}`}
          meme={e} 
          image ={props.images.find(img=>img.id===e.imageId)}
          />
        )}
    </div>
  )
}

const mapStateToProps = (state,props) => ({...props,...state.ressources})

const mapDispatchToProps = () =>({})

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnail)