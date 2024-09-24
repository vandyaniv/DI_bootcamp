import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: 'Php', votes: 0 },
    { name: 'Python', votes: 0 },
    { name: 'JavaSript', votes: 0 },
    { name: 'Java', votes: 0 },
  ]);

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <h1> Vote Your Language </h1>
      </div>
    </>
  );
}

export default App;
