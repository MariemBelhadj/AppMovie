import React from 'react';
import './nav.css'
import MoviesList from "./MoviesList"
import { useState } from 'react';
import Search from './Search';
import AddMovie from './AddMovie';

const Main = () => {

    const [movies, setMovies] = useState([
        {
            id: 1,
            title: 'Fighting for the Motherland',
            image: './images/name2.jpg',
            detail: 'In 1161, the territory of the Great Song Dynasty was split, and Jin Zhuwan Yan Liang invaded and occupied the Central Plains. The People in the Central Plains could not bear the harsh crushing and rose up to fight back.',
            rate: 2

        },
        {
            id: 2,
            title: 'Wrecked',
            image: './images/name3.jpg',
            detail: 'A man who wakes up in a car accident at the bottom of a ravine must overcome incredible obstacles to survive.',
            rate: 4

        },
        {
            id: 3,
            title: 'House of Gucci',
            image: './images/name4.jpg',
            detail: 'House of Gucci, ou La Saga Gucci au Québec, est un drame biographique américain réalisé par Ridley Scott, sorti en 2021. Adapté du livre The House of Gucci: A Sensational Story of Murder, Madness, Glamour, and Greed écrit par Sara Gay Forden en 2000 le film revient sur l assassinat de Maurizio Gucci en 19951,2.',
            rate: 5

        }
    ])
    const [ratingSearch, setRatingSearch] = useState(0)
    const [searchWord, setSearchWord] = useState('');
    const handleSearch = (e) => setSearchWord(e.target.value);
    const handleAdd=(newMovie)=>{setMovies([...movies,newMovie])}
    return (
        <>
            <Search
                handleSearch={handleSearch}
                setRatingSearch={setRatingSearch}
                ratingSearch={ratingSearch}
            />
            <div className="Container">
                <MoviesList data={searchWord
                    ? movies.filter((movie) =>
                        movie.title.toLowerCase().includes(searchWord.toLowerCase())
                    )
                    : ratingSearch > 1
                        ? movies.filter((movie) => movie.rate >= ratingSearch)
                        : movies
                } />

            </div>
            <hr style={{width:'100%',border:'1px solid rgb(168, 89, 20)'}}/>
            <h1 className='addMoviee'>Add Movie</h1>
            <AddMovie handleAdd={handleAdd}/>
        </>
    )
}
export default Main;