import React from 'react'
import pokeball from '../assets/pokeball.png'

const Pokeball = () => {
  return (
    <img
      className="pokeball-animation"
      src={pokeball}
      alt="pokeball"
      height="300px"
      width="300px"
    />
  )
}

export default Pokeball
