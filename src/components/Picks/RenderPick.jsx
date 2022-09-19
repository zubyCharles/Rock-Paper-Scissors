import Rock from './Rock';
import Paper from './Paper';
import Scissors from './Scissors';

const RenderPick = ({ pick }) => {
  if (pick) {
    switch (pick) {
      case 'rock':
        return <Rock />;
      case 'paper':
        return <Paper />;
      case 'scissors':
        return <Scissors />;
    }
  }
};

export default RenderPick;
