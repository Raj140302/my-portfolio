import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Card({ content, classN, title, detail, root }) {
    const navigate = useNavigate();

    return (
        <Link className={`card ${classN}`} to={root}>
            <h1>{content}</h1>
            <div>
                <p className='title'>{title}</p>
                <p className='detail'>{detail}</p>
            </div>
        </Link>
    )
}

export default Card