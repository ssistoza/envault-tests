import Note from './components/Note';

function App() {
  return (
    <>
      <Note name="REACT_APP_ONE" value={process.env.REACT_APP_ONE} />
      <Note name="REACT_APP_ONE" value={process.env.REACT_APP_ONE} />
      <Note name="REACT_APP_ONE" value={process.env.REACT_APP_ONE} />
    </>
  );
}

export default App;
