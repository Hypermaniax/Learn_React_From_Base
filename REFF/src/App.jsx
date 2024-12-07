import Player from './components/Player.jsx';
import TimerChallange from './components/TimerChallange.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title='easy' targetTime={1} />
        <TimerChallange title={'Not Easy'} targetTime={5} />
        <TimerChallange title={'Getting Though'} targetTime={10} />
        <TimerChallange title={'Pros Only'} targetTime={15} />
      </div>
    </>
  );
}

export default App;
