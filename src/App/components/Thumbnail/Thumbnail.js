import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import MemeSvgViewer from '../ui/MemeSvgViewer/MemeSvgViewer'
import style from './Thumbnail.module.scss'
export const Thumbnail = (props) => {
  return (
      
          <div className={style.Thumbnail} test-id="Thumbnail">
            {props.memes.map((e,i)=> 
              <Link to={`/editor/${e.id}`} key={`th${i}`}>
                <MemeSvgViewer 
               
                key={`th${i}`}
                meme={e} 
                image ={props.images.find(img=>img.id===e.imageId)}
                />
                </Link>
              )}
          </div>
  )
}

const mapStateToProps = (state,props) => ({...props,...state.ressources})

const mapDispatchToProps = () =>({})

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnail)