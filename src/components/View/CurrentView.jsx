import { useGameContext } from '../../context/GameController';
import Paper from '../Picks/Paper';
import Rock from '../Picks/Rock';
import Scissors from '../Picks/Scissors';
import RenderPick from '../Picks/RenderPick';

const CurrentView = () => {
  const {
    currentGameState,
    playerData,
    houseData,
    setCurrentGameState,
    setPlayerData,
    setHouseData,
    whoWon,
    setWhoWon,
  } = useGameContext();

  const resetGame = () => {
    setPlayerData(() => ({
      hasPicked: false,
      pick: null,
    }));

    setHouseData(() => ({
      hasPicked: false,
      pick: null,
    }));

    setCurrentGameState(0);

    setWhoWon(null);
  };

  switch (currentGameState) {
    case 0:
      return (
        <div className="state-0 pt-[5rem] pb-[8rem] lg:pb-[6rem]">
          <div className="w-[100%] lg:w-[35%] pb-12 lg:mx-auto flex flex-row justify-between">
            <Paper />
            <Scissors />
          </div>
          <Rock />
        </div>
      );

    case 1:
      return (
        <div className="flex flex-row w-[full] lg:w-[35%] lg:mx-auto justify-between pt-[5rem] pb-[14rem] px-2">
          <div className="flex flex-col">
            <div className="w-fit pb-6 mx-0">
              <RenderPick pick={playerData.pick} />
            </div>
            <p className="text-upper text-center text-slate-50 uppercase">
              You picked
            </p>
          </div>
          <div className="flex flex-col">
            <div className="w-fit pb-6 mx-0">
              <div className="w-[7rem] h-[7rem] lg:w-[8rem] lg:h-[8rem] bg-dark-round-bg rounded-[50%]">
                {' '}
              </div>
            </div>
            <p className="text-upper text-center text-slate-50 uppercase">
              The house picked
            </p>
          </div>
        </div>
      );

    case 2:
      return (
        <div className="flex flex-row w-[full] lg:w-[35%] lg:mx-auto justify-between pt-[5rem] pb-[14rem] px-2">
          <div className="flex flex-col">
            <div className="w-fit pb-6 mx-0">
              <RenderPick pick={playerData.pick} />
            </div>
            <p className="text-upper text-center text-slate-50 uppercase">
              You picked
            </p>
          </div>
          <div className="flex flex-col">
            <div className="w-fit pb-6 mx-0">
              <RenderPick pick={houseData.pick} />
            </div>
            <p className="text-upper text-center text-slate-50 uppercase">
              The house picked
            </p>
          </div>
        </div>
      );

    case 3:
      return (
        <div className="pt-[5rem] pb-[8rem] px-2">
          <div className="flex flex-row w-[full] lg:w-[55%] lg:mx-auto justify-between pb-[5rem]">
            <div className="flex flex-col">
              <div
                className={`${
                  whoWon === 'player' ? 'indicator' : null
                } w-fit pb-6 mx-0`}
              >
                <RenderPick pick={playerData.pick} />
              </div>
              <p className="text-upper text-center text-slate-50 uppercase">
                You picked
              </p>
            </div>
            <div className="flex flex-col">
              <div
                className={`${
                  whoWon === 'house' ? 'indicator' : null
                } w-fit pb-6 mx-0`}
              >
                <RenderPick pick={houseData.pick} />
              </div>
              <p className="text-upper text-center text-slate-50 uppercase">
                The house picked
              </p>
            </div>
          </div>
          <div className="w-fit mx-auto lg:-translate-y-[15rem]">
            <h1 className="uppercase pb-3 text-[50px] lg:text-[44px] font-semibold text-center text-slate-50">
              {whoWon === 'tie'
                ? 'Its a tie'
                : whoWon === 'player'
                ? 'You Win'
                : 'You Lose'}
            </h1>
            <button
              onClick={resetGame}
              className={`w-full mx-auto px-16 py-2 uppercase text-[18px] text-center font-semibold tracking-[3px] bg-slate-50 rounded-lg
              ${whoWon === 'house' ? 'text-rose-400' : 'text-dark'}`}
            >
              Play Again
            </button>
          </div>
        </div>
      );
  }
};

export default CurrentView;
