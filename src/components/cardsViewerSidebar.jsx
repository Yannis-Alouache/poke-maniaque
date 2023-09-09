import React, { useEffect, useState } from 'react'
import axios from 'axios'
import seriesLogo from "../assets/seriesLogo.png"

function CardsViewerSidebar() {
    const [listOfSeries, setListofSeries] = useState([]);
    
    function getFormatedName(name) {
        return name.replace(/ /g, "-"); // replace all spaces with underscore for url lisibility
    }

    useEffect(() => {
        const loadSeries = () => {
            axios.get('https://api.tcgdex.net/v2/fr/series')
            .then(function (response) {
                const seriesInfo = response.data.reverse() // Get series id and name
                seriesInfo.forEach(serie => {
                    axios.get('https://api.tcgdex.net/v2/fr/series/' + serie.id)
                    .then(function (response) {
                        setListofSeries(listOfSeries => [...listOfSeries, response.data])
                    })
                });
            })
            .catch(function(error) {
                console.log(error);
            })
        };
        loadSeries();
    }, [])

  return (
    <div className="lg:col-span-4 xl:col-span-3 lg:block hidden border rounded-xl shadow-lg bg-slate-50 p-6 select-none">
        {listOfSeries.length > 0 && listOfSeries.map((series) => {
            return (
                <div key={series.id} className="collapse collapse-plus bg-slate-100 shadow-md duration-200 ease-in-out mb-3 last:mb-0">
                    <input className='toggler' type="checkbox" /> 
                    <div className="collapse-title lg:text-md xl:text-xl font-medium">
                        <div className="flex">
                            <span>{series.name}</span>
                        </div>
                    </div>
                    <div className="collapse-content"> 
                        <div className="flex flex-col gap-1">
                            {series.sets.map((set) => {
                                return (
                                    <a href={getFormatedName(set.name)} key={set.id} className="flex gap-1">
                                        <img loading='lazy' src={seriesLogo} className='h-6 w-6' alt="" />
                                        <span>{set.name}</span>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default CardsViewerSidebar