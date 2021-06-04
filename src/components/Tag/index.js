import React from 'react'
import './index.css'

function Tag({tag, deleteTag}){

  console.log(tag)
  return (
  <>
    <div className="tag">{tag.text}
    <button onClick={deleteTag}>X</button>
    </div>
  </>
  )
}

export default Tag;