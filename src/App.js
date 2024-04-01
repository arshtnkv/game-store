import GAMES from './assets/games.json'
import GamesStore from "./components/GamesStore/GamesStore";

const App = () => {
  return (
    <>
      <GamesStore games={GAMES}/>
    </>
  );
};

export default App;
