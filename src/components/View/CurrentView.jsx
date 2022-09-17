import { useGameContext } from '../../context/Game';
import Paper from '../Picks/Paper';
import Rock from '../Picks/Rock';
import Scissors from '../Picks/Scissors';
import RenderPick from '../Picks/RenderPick';
import Triangle from '../../images/bg-triangle.svg';

const CurrentView = () => {
  const { currentGameState, playerData, houseData } = useGameContext();

  switch (currentGameState) {
    case 0:
      return (
        <div className="state-0 pt-[5rem] pb-[8rem]">
          <div className="w-[100%] pb-12 flex flex-row justify-between">
            <Paper />
            <Scissors />
          </div>
          <Rock />
        </div>
      );

    case 1:
      return (
        <div className="flex flex-row w-[full] justify-between pt-[5rem] pb-[14rem] px-2">
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
              <div className="w-[7rem] h-[7rem] bg-dark-round-bg rounded-[50%]">
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
        <div className="flex flex-row w-[full] justify-between pt-[5rem] pb-[14rem] px-2">
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
          <div className="flex flex-row w-[full] justify-between pb-[5rem]">
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
          <div className="w-fit mx-auto">
            <h1 className="uppercase pb-3 text-[50px] text-center text-slate-50">
              You win
            </h1>
            <button className="w-fit mx-auto px-16 py-2 uppercase text-[18px] text-center text-dark bg-slate-50 rounded-lg">
              Play Again
            </button>
          </div>
        </div>
      );
  }
};

export default CurrentView;
