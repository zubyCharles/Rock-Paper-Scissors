import RulesModal from './components/Rules/RulesModal';
import Paper from './components/Picks/Paper';
import Rock from './components/Picks/Rock';
import Scissors from './components/Picks/Scissors';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <RulesModal />
      <Paper />
      <Rock />
      <Scissors />
    </div>
  );
};

export default App;
