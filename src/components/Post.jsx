import React from 'react'

function Post({ username, texto }) {

  return (
    <div>
        <h3>{ username }</h3>
        <p>{ texto }</p>
        <button>Like</button>
    </div>
  )
}

export default Post