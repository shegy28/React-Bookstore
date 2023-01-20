import React from 'react'

const Book = (props) => {
    return (
        <div>
            <ul>
                <li>{props.title}</li>
                <li>{props.author}</li>
            </ul>
        </div>
    )
}

export default Book