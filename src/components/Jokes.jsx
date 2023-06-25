import React, { useState, useEffect } from 'react';
import jokes from '../assets/jokes.json';
import Button from "@mui/material/Button";

const Jokes = () => {
    const [randomJoke, setRandomJoke] = useState('');
    const [randomAuthor, setRandomAuthor] = useState('');

    useEffect(() => {
        loadJokes();
    }, []);

    const loadJokes = () => {
        const jokesArray = jokes.jokes_quotes;
        getRandomJoke(jokesArray);
    };

    const getRandomJoke = (jokesArray) => {
        const randomIndex = Math.floor(Math.random() * jokesArray.length);
        setRandomJoke(jokesArray[randomIndex].quote);
        setRandomAuthor(jokesArray[randomIndex].author);
    };

    const handleNextJokeClick = () => {
        loadJokes();
    };

    return (
        <>
            <div>
                <p>{randomJoke}</p>
                <p>- {randomAuthor}</p>
                <Button variant="contained" color="primary" onClick={handleNextJokeClick}>Next Joke</Button>
                <Button variant="contained" color="secondary" onClick={handleNextJokeClick}>😂</Button>
                <Button variant="contained" color="warning" onClick={handleNextJokeClick}>👎</Button>
            </div>
        </>
    );
};

export default Jokes;
