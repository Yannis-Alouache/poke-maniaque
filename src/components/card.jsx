import React from 'react'

function Card(props) {
  
  const { imgSrc, setName } = props;
  
  function getFormatedName(name) {
    return name.replace(/ /g, "-"); // replace all spaces with underscore for url lisibility
  }

  return (
    <a href={"/series/" + getFormatedName(setName)} className='w-full h-32 p-3 sm:p-6 items-center rounded-xl flex justify-center shadow-lg bg-slate-100'>
        <div style={
          {
              "background": `url(${imgSrc})`,
              "backgroundPosition": "center",
              "backgroundSize": "contain",
              "backgroundRepeat": "no-repeat"
          }
        } className="w-full h-full hover:scale-105 hover:duration-200 duration-200">
        </div>
    </a>
  )
}

export default Card;  