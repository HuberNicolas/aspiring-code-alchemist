import { useState } from 'react';
import { Button, Grow, Typography } from '@mui/material';

const FlyingEmojis = () => {
  const [showEmojis, setShowEmojis] = useState(false);

  const handleButtonClick = () => {
    setShowEmojis(true);

    setTimeout(() => {
      setShowEmojis(false);
    }, 1500);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleButtonClick}>
        Show Emojis
      </Button>

      <Grow in={showEmojis}>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <Typography variant="h2" style={{ marginRight: '5px' }}>
            😀
          </Typography>
          <Typography variant="h2" style={{ marginRight: '5px' }}>
            🎉
          </Typography>
          <Typography variant="h2" style={{ marginRight: '5px' }}>
            🎊
          </Typography>
          <Typography variant="h2" style={{ marginRight: '5px' }}>
            🎈
          </Typography>
        </div>
      </Grow>
    </div>
  );
};

export default FlyingEmojis;
