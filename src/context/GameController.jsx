import { createContext, useContext, useEffect, useState } from 'react';

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const Game = ({ children }) => {
  const [currentGameState, setCurrentGameState] = useState(0);

  const [endMessage, setEndMessage] = useState('');

  const [whoWon, setWhoWon] = useState(null);

  const [playerData, setPlayerData] = useState({
    hasPicked: false,
    pick: null,
  });

  const [houseData, setHouseData] = useState({
    hasPicked: false,
    pick: null,
  });

  const picksArray = ['rock', 'paper', 'scissors'];

  useEffect(() => {
    function didPlayerWin() {
      if (playerData.hasPicked && houseData.hasPicked && currentGameState === 2)
        switch (playerData.pick) {
          case 'rock':
            if (houseData.pick === 'scissors') {
              return setWhoWon('player');
            } else if (houseData.pick === 'paper') {
              return setWhoWon('house');
            } else {
              return setWhoWon('tie');
            }

          case 'paper':
            if (houseData.pick === 'rock') {
              return setWhoWon('player');
            } else if (houseData.pick === 'scissors') {
              return setWhoWon('house');
            } else {
              return setWhoWon('tie');
            }

          case 'scissors':
            if (houseData.pick === 'paper') {
              return setWhoWon('player');
            } else if (houseData.pick === 'rock') {
              return setWhoWon('house');
            } else {
              return setWhoWon('tie');
            }
        }
      console.log(whoWon);
    }
    didPlayerWin();
  }, [currentGameState]);

  return (
    <GameContext.Provider
      value={{
        currentGameState,
        setCurrentGameState,
        endMessage,
        setEndMessage,
        playerData,
        setPlayerData,
        houseData,
        setHouseData,
        picksArray,
        whoWon,
        setWhoWon,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
