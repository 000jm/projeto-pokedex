import { useEffect, useRef, useState } from 'react'
import pokeApi from './assets/js/poke-api'

function Rodar() {

    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState(0)

    const alreadyLoaded = useRef(false)

    const limit = 10
    const maxRecords = 151

    function loadPokemonItens(currentOffset) {

        pokeApi.getPokemons(currentOffset, limit)
            .then((newPokemons) => {

                setPokemons((previousPokemons) => [
                    ...previousPokemons,
                    ...newPokemons
                ])

            })
    }

    useEffect(() => {

        if (alreadyLoaded.current) {
            return
        }

        alreadyLoaded.current = true

        loadPokemonItens(0)

    }, [])

    function loadMore() {

        const newOffset = offset + limit

        loadPokemonItens(newOffset)

        setOffset(newOffset)
    }

    return (
        <main className="content">

            <h1>Pokedex</h1>

            <ol className="pokemons">

                {pokemons.map((pokemon) => (

                    <li
                        className={`pokemon ${pokemon.type}`}
                        key={pokemon.number}
                    >

                        <span className="number">
                            #{pokemon.number}
                        </span>

                        <span className="name">
                            {pokemon.name}
                        </span>

                        <div className="detail">

                            <ol className="types">

                                {pokemon.types.map((type) => (

                                    <li
                                        className={`type ${type}`}
                                        key={type}
                                    >
                                        {type}
                                    </li>

                                ))}

                            </ol>

                            <img
                                src={pokemon.photo}
                                alt={pokemon.name}
                            />

                        </div>

                    </li>

                ))}

            </ol>

            <div className="pagination">

                {offset + limit < maxRecords && (

                    <button
                        type="button"
                        onClick={loadMore}
                    >
                        Load More
                    </button>

                )}

            </div>

        </main>
    )
}

export default Rodar