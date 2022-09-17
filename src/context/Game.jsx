import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

export const Game = ({ children }) => {
  const [currentGameState, setCurrentGameState] = useState(0);

  const [endMessage, setEndMessage] = useState('');

  const [playerData, setPlayerData] = useState({
    hasPicked: false,
    pick: null,
  });

  const [houseData, setHouseData] = useState({
    hasPicked: false,
    pick: null,
  });

  const picksArray = ['rock', 'paper', 'scissors'];

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
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
