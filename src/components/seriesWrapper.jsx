import React from 'react'
import SetsWrapper from './setsWrapper';
import seriesLogo from '../assets/seriesLogo.png'

function SeriesWrapper(props) {

  const { listOfSeries } = props;

  if (listOfSeries === undefined) return (<>Still Loading...</>)

  return (
    <div className="container px-6 lg:px-20 mx-auto pt-20">
          {listOfSeries.length > 0 ? listOfSeries.map((series) => {
            return (
              <div key={series.id} className="border border-slate-100 rounded-xl shadow-lg mb-16 pb-8 px-8">
                  <div className="flex pb-4 pt-4 gap-3 items-center">
                    <img src={seriesLogo} className='h-8 w-8' alt="" />
                    <h2 className='text-2xl font-extrabold text-gray-700	'>{series.name}</h2>
                  </div>
                  <SetsWrapper sets={series.sets} />
              </div>
            )    
          }): <h1>No data</h1>}
    </div>
  )
}

export default SeriesWrapper