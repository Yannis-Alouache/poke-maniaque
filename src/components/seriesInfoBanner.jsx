import React from 'react'
import us from '../assets/us.png'

function SeriesInfoBanner(props) {
  
  const { releaseDate, cardSetId, cardSetName, cardSetCardCount } = props

  return (
    <>
        <div className="border rounded-xl bg-slate-50 shadow-lg mb-10 p-6 text-slate-700 sm:text-2xl font-zyzol">
            <div className="">
                <div className="flex flex-col items-center flex-wrap sm:justify-between sm:flex-row">
                    <div className="w-[200px]">
                        <img className='h-auto w-full' src={require(`../assets/logoSet/` + cardSetId.replace(/\s/g, '') + `.png`)} alt="" />
                    </div>
                    <div className="flex flex-row-reverse gap-12 pt-5 sm:gap-0 sm:flex-col">
                        <h3 className='hidden sm:block'>{cardSetName}</h3>
                        <div className="flex items-center gap-3">
                            <img src={us} className='sm:w-[45px] sm:h-[45px]' alt="" />
                            <h3 className='pt-2'>{releaseDate}</h3>
                        </div>
                        <div className="flex items-center content-center gap-3">
                            <span className='border rounded-xl bg-lime-500 text-white px-2 pt-2'>{cardSetCardCount}</span>
                            <h3 className='pt-2'>Cartes</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SeriesInfoBanner