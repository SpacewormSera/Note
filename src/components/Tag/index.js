import React, {useContext} from 'react'
import {connect} from 'react-redux'
import {Context} from '../../context'
import './index.scss'

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

export default connect(null, null)(Tag);