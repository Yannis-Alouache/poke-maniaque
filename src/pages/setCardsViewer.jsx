import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import Navbar from '../components/navbar';
import Hero from '../components/hero';

import CardsViewerSidebar from '../components/cardsViewerSidebar';
import { Dialog, Transition } from '@headlessui/react'
import "../style/pokeCard.css"
import SeriesInfoBanner from '../components/seriesInfoBanner';

import notFound from "../assets/notFound.jpg"
import NotFound from './notFound';


function SetCardsViewer() {
  const { setName } = useParams();
  const [cardSet, setCardSet] = useState(null);
  const [releaseDateSet, setReleaseDateSet] = useState(null);
  let [isOpen, setIsOpen] = useState(false)
  let [mainImage, setMainImage] = useState(null);
  let [missingCardIds, setMissingCardIds] = useState([])
  let [collectionExist, setCollectionExist] = useState(null);

  const formattedSetName = () => {
    return setName.replace(/-/g, " ")
  }

  const openModal = (image, currentCardId) => {
    if (missingCardIds.includes(currentCardId)) {
      setMainImage(notFound)
    }
    else
      setMainImage(image + "/high.webp")
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    axios.get("https://api.tcgdex.net/v2/fr/sets/" + formattedSetName())
    .then((response) => {
      let date = new Date(response.data.releaseDate);
      setReleaseDateSet(date.toLocaleDateString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric'}))
      setCardSet(response.data)
      setCollectionExist(true)
    })
    .catch((error) => {
      setCollectionExist(false);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  if (collectionExist != null && !collectionExist)
    return <NotFound />

  return (
    <>
      <Navbar />
      <Hero />

      <div className="pt-16 container mx-auto px-5 lg:px-16 xl:px-20">

          {cardSet && releaseDateSet &&
            <>
              <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => closeModal()}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-60" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex flex-col min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={"div"}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <div className="modal-close cursor-pointer items-center text-white z-50 absolute -top-10 -right-0 shadow">
                            <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 18 18">
                              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                            </svg>
                        </div>
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-300 p-6 text-left align-middle shadow-xl transition-all">
                          <div>
                            <img src={mainImage} className='w-full h-full img' alt="" />
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>

              <SeriesInfoBanner releaseDate={releaseDateSet} cardSetId={cardSet.id} cardSetName={cardSet.name} cardSetCardCount={cardSet.cardCount.total} />

              

              <div className="grid grid-cols-12 lg:gap-10">
                <CardsViewerSidebar />

                <div className="col-span-12 lg:col-span-8 xl:col-span-9 grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {cardSet.cards.map((card) => {
                    return (
                      <button key={card.id} className="relative top-0 ease-in duration-100 hover:-top-3 shadow-lg" onClick={() => openModal(card.image, card.id)}>
                        <img
                          src={card.image + "/low.webp"}
                          loading='lazy'
                          className='w-full h-full'
                          alt={"carte pokemon " + card.id}
                          onError={({ currentTarget }) => {
                            setMissingCardIds(cardIds => [...cardIds, card.id]);
                            currentTarget.onerror = null;
                            currentTarget.src = notFound;
                          }}
                        />
                      </button>
                    )
                  })}
                </div>
              </div>
            </>
          }
      </div>
    </>
  )
}

export default SetCardsViewer