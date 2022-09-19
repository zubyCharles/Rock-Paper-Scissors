import { useState } from 'react';
import Header from './components/Header/Header';
import CurrentView from './components/View/CurrentView';
import RulesModal from './components/Rules/RulesModal';
import RulesBtn from './components/Rules/RulesBtn';
import './App.css';

const App = () => {
  const [showRulesModal, setRulesModal] = useState(false);

  return (
    <div className="app">
      {showRulesModal && <RulesModal toggleRulesModal={setRulesModal} />}
      <Header />
      <CurrentView />
      <RulesBtn
        showRulesModal={showRulesModal}
        toggleRulesModal={setRulesModal}
      />
    </div>
  );
};

export default App;
