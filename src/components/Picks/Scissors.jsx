import ScissorsImg from '../../images/icon-scissors.svg';
import { useGameContext } from '../../context/Game';

const Scissors = () => {
  const {
    currentGameState,
    setCurrentGameState,
    playerData,
    setPlayerData,
    houseData,
    setHouseData,
    picksArray,
  } = useGameContext();

  const playerMove = () => {
    if (currentGameState === 0 && !playerData.hasPicked) {
      setCurrentGameState(1);
      setPlayerData(() => ({ hasPicked: true, pick: 'scissors' }));
    }
  };

  (() => {
    if (currentGameState === 1 && playerData.hasPicked) {
      setTimeout(() => {
        setCurrentGameState(2);
        setHouseData(() => ({
          hasPicked: true,
          pick: picksArray[Math.round(Math.random() * (2 - 0) + 0)],
        }));
      }, 2000);
    }
  })();

  (() => {
    if (currentGameState === 2 && playerData.hasPicked && houseData.hasPicked) {
      setTimeout(() => {
        setCurrentGameState(3);
      }, 1000);
    }
  })();
  return (
    <div className="relative scissors-gradient w-[7rem] h-[7rem] grid place-items-center mx-auto rounded-[50%]">
      <div className="absolute w-[5rem] h-[5rem] grid place-items-center bg-slate-50 rounded-[50%]">
        <img className="w-fit" src={ScissorsImg} alt="" onClick={playerMove} />
      </div>
    </div>
  );
};

export default Scissors;
