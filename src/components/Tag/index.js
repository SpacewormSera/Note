import React, {useContext} from 'react'
import {Context} from '../../context'
import './index.css'

function Tag({tag}){
  const {deleteTag} = useContext(Context);
  return (
  <>
    <div className="tag">{tag.text}
    <button onClick={()=>deleteTag(tag.id)}>X</button>
    </div>
  </>
  )
}

export default Tag;