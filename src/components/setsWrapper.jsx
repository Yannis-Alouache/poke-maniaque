import React from 'react'
import Card from './card'

function SetsWrapper(props) {

  const { sets } = props;

  return (
    <>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5">
            {sets.map((set) => {
                try {
                    return (
                        <Card key={set.id} setName={set.name} imgSrc={require(`../assets/logoSet/` + set.id.replace(/\s/g, '') + `.png`)}/>
                    )
                } catch (error) {
                    // Do nothing there some sets in the pokemon series don't have any image so i don't show them if that's the case
                }
            })}
        </div>
    </>
  )
}

export default SetsWrapper