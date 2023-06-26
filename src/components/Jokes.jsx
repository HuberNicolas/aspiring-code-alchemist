import {useEffect, useState} from 'react';
import jokes from '../assets/jokes.json';
import Button from '@mui/material/Button';
import FlyingEmojis from './FlyingEmojis';

const Jokes = () => {
    const [randomJoke, setRandomJoke] = useState('');
    const [randomAuthor, setRandomAuthor] = useState('');
    const [emojiType, setEmojiType] = useState('notFunny');

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

    const handleFunnyButtonClick = () => {
        setEmojiType('funny');
        loadJokes();
    };

    const handleNotFunnyButtonClick = () => {
        setEmojiType('notFunny');
        loadJokes();
    };

    return (
        <>
            <div>
                <p>{randomJoke}</p>
                <p>- {randomAuthor}</p>
                <Button variant="contained" color="primary" onClick={handleNextJokeClick}>
                    Next Joke
                </Button>
                <Button variant="contained" color="secondary" onClick={handleFunnyButtonClick}>
                    Funny
                </Button>
                <Button variant="contained" color="warning" onClick={handleNotFunnyButtonClick}>
                    Not so funny
                </Button>
            </div>
            <FlyingEmojis emojiType={emojiType} />
        </>
    );
};

export default Jokes;
