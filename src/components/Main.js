import React from 'react';
import Pokemon from "./Pokemon";
import HubungiKamiForm from "./HubungiKamiForm";
class Main extends React.Component {
    render() {
        const listPokemon = [
            {
                name: "Pikachu",
                image: "./images/pikachu.png",
                introduction: "Pikachu adalah pokemon"
            },
            {
                name: "Bulbasaur",
                image: "./images/bulbasaur.png",
                introduction: "Bulbasaur adalah pokemon"
            },
            {
                name: "Blastoise",
                image: "./images/blastoise.png",
                introduction: "Blastoise adalah pokemon bukan gundam"
            },
            {
                name: "Charmander",
                image: "./images/charmander.png",
                introduction: "Charmander adalah pokemon"
            }
        ]
        return (
            <div className='main-wrapper'>
                <div className='main'>
                    <div className='hello-container'>
                        <h1>Hello, Pokemon hunter</h1>
                        <h2>Selamat datang di dunia Pokemon</h2>
                    </div>
                    <div className='pokemon-container'>
                        <h3>List Pokemon</h3>
                        <div className='list-card'>
                            {listPokemon.map((pokemon) => {
                                return (
                                    <Pokemon name={pokemon.name} image={pokemon.image} introduction={pokemon.introduction} />
                                );
                            })}
                        </div>
                    </div>
                    {/*Masukkan komponen HubungiKamiForm.js di bawah ini*/}
                    <div className='hubungikami-container'>
                        <h3>Hubungi Kami</h3>
                        <HubungiKamiForm />
                    </div>
                </div>
            </div>
        );
    };
}

export default Main;