import React from 'react'
import bg from "../assets/hero.webp"

function Hero() {
  return (
    <div className="container mx-auto text-center">
        <div
          style={
            {
              // eslint-disable-next-line
              "background": 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(' + `${bg}` + ')',
              "backgroundPosition": "center",
              "backgroundSize": "cover",
              "height": "460px"
            }
          }
          className="w-full items-center sm:rounded-xl flex justify-center px-3 sm:px-0"
        >
          <div className='flex flex-col justify-center items-center'>
            <p className='text-white font-bold pb-2'>Plongez dans l'univers Pokémon avec PokeManiaque : Votre source ultime pour toutes les cartes Pokémon, une collection à la fois !</p>
            <p className='text-white text-5xl lg:text-6xl font-bold'>POKÉMON CARD GAME France</p>
          </div>
        </div>
    </div>
  )
}

export default Hero