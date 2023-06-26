import React, {useEffect, useState} from 'react';
import {Grow, Typography} from '@mui/material';

const FlyingEmojis = ({ emojiType }) => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [emojiKey, setEmojiKey] = useState(0);

  useEffect(() => {
    setShowEmojis(true);
    setEmojiKey(prevKey => prevKey + 1);

    const timeout = setTimeout(() => {
      setShowEmojis(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [emojiType]);

  return (
      <Grow in={showEmojis} key={emojiKey}>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          {emojiType === 'funny' && (
              <>
                <Typography variant="h2" style={{ marginRight: '5px' }}>
                  😃
                </Typography>
                <Typography variant="h2" style={{ marginRight: '5px' }}>
                  😂
                </Typography>
                <Typography variant="h2" style={{ marginRight: '5px' }}>
                  🤣
                </Typography>
              </>
          )}
          {emojiType === 'notFunny' && (
              <>
                <Typography variant="h2" style={{ marginRight: '5px' }}>
                  👎
                </Typography>
                <Typography variant="h2" style={{ marginRight: '5px' }}>
                  😕
                </Typography>
                <Typography variant="h2" style={{ marginRight: '5px' }}>
                  😒
                </Typography>
              </>
          )}
        </div>
      </Grow>
  );
};

export default FlyingEmojis;
