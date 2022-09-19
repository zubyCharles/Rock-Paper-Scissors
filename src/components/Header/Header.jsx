import { useEffect, useState } from 'react';
import Logo from '../../images/logo.svg';
import { useGameContext } from '../../context/GameController';

const Header = () => {
  const [playerScore, setPlayerScore] = useState(
    JSON.parse(localStorage.getItem('score')) || 0
  );
  const { currentGameState, whoWon } = useGameContext();

  useEffect(() => {
    function updatePlayerScore() {
      if (currentGameState === 3) {
        if (whoWon === 'player') {
          setPlayerScore((score) => (score += 1));
        } else if (whoWon === 'house') {
          setPlayerScore((score) => (score >= 1 ? (score -= 1) : score));
        } else {
          setPlayerScore((score) => score);
        }
      }
    }
    updatePlayerScore();
  }, [currentGameState]);

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(playerScore));
  }, [playerScore]);

  return (
    <div className="pb-12">
      <div className="w-[100%] flex flex-row justify-between px-8 py-2 border-[2px] border-header-outline rounded-lg">
        <div className="w-[32%] grid place-content-center">
          <img className="w-[100%]" src={Logo} alt="" />
        </div>
        <div className="bg-slate-50 px-5 py-2 rounded">
          <small className="text-center">SCORE</small>
          <p className="text-center text-light text-4xl font-bold">
            {playerScore}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
