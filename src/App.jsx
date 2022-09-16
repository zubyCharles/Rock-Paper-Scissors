import { useState } from 'react';
import Header from './components/Header/Header';
import CurrentView from './components/View/CurrentView';
import RulesModal from './components/Rules/RulesModal';
import RulesBtn from './components/Rules/RulesBtn';
import './App.css';

const App = () => {
  const [currentGameState, setCurrentGameState] = useState(0);

  const [endMessage, setEndMessage] = useState('');

  const [showRulesModal, setRulesModal] = useState(false);

  const [playerData, setPlayerData] = useState({
    hasPicked: false,
    pick: null,
  });

  const [houseData, setHouseData] = useState({
    hasPicked: false,
    pick: null,
  });

  return (
    <div className="app">
      {showRulesModal && <RulesModal toggleRulesModal={setRulesModal} />}
      <Header />
      <CurrentView
        currentGameState={currentGameState}
        setCurrentGameState={setCurrentGameState}
      />
      <RulesBtn toggleRulesModal={setRulesModal} />
    </div>
  );
};

export default App;
