import { useState, useEffect } from 'react';
import jokes from '../assets/jokes.json';

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

    return (
        <>
            <div>Joke</div>
            <div>
                <p>{randomJoke}</p>
                <p>- {randomAuthor}</p>
            </div>
        </>
    );
};

export default Jokes;
