import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SeriesWrapper from "../components/seriesWrapper";
import Footer from '../components/footer';

function Home() {

    const [listOfSeries, setListofSeries] = useState([]);
    document.title = 'PokeManiaque | Accueil';


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
  
    if (listOfSeries === undefined) return (<>Still Loading...</>)
  
    return (
      <>
        <Navbar />
        <Hero />
        {listOfSeries.length > 0 && <SeriesWrapper listOfSeries={listOfSeries} />}
        <Footer />
      </>
    );
}

export default Home