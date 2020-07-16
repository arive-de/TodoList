import React from 'react'

const handleClick = ({ deleteTodo }) => {

    return (
        <div className="negative ui button" onClick={deleteTodo}>Delete</div>
    )
}

export default handleClick
