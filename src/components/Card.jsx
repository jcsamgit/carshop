import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({card:{id,marca,modelo,precio,image}}) {
  return (
    <div>
        <Link to={`/${id}`} key={id}>

            <div title='ver mas >>>' className='cardd'>
                <img className='imgCard' src={image} alt={`imagen de un auto ${marca} ${modelo}`}  />
                <h5>{marca} {modelo}</h5>
                <h5>{precio}</h5>
            </div>
        </Link>
    </div>
  )
}
