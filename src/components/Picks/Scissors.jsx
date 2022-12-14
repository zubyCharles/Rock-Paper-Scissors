import ScissorsImg from '../../images/icon-scissors.svg';
import { useGameContext } from '../../context/GameController';

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
      setPlayerData(() => ({ hasPicked: true, pick: 'scissors' }));
      setCurrentGameState(1);
    }
  };

  (() => {
    if (currentGameState === 1 && playerData.hasPicked) {
      setTimeout(() => {
        setHouseData(() => ({
          hasPicked: true,
          pick: picksArray[Math.round(Math.random() * (2 - 0) + 0)],
        }));
        setCurrentGameState(2);
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
    <div className="relative scissors-gradient w-[7rem] h-[7rem] lg:w-[9rem] lg:h-[9rem] grid place-items-center mx-auto rounded-[50%]">
      <div
        onClick={playerMove}
        className="absolute w-[5rem] h-[5rem] lg:w-[7rem] lg:h-[7rem] grid place-items-center bg-slate-50 rounded-[50%] cursor-pointer"
      >
        <img className="w-fit" src={ScissorsImg} alt="" />
      </div>
    </div>
  );
};

export default Scissors;
