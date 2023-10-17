import React from 'react'

const Card = ({children}) => {
  return (
    <div className="rounded-3xl bg-white px-5 py-7">
        {children}
    </div>

  )
}

export default Card