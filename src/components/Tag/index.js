import React from 'react'
import {connect} from 'react-redux'
import {deleteTag} from '../../Redux/actions'
import './index.scss'

function Tag({tag, deleteTag}){
  console.log(tag.id)
  return (
  <>
    <div className="tag">{tag.text}
    <button onClick={()=>deleteTag(tag.id)}>X</button>
    </div>
  </>
  )
}

const mapDispatchToProps = {
  deleteTag
}
export default connect(null, mapDispatchToProps)(Tag);
