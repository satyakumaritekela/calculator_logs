import { useState} from 'react';
import Calculator from './components/Calculator/Calculator';
import Logs from './components/Logs/Logs';

function App() {
  const [logs, setLogs] = useState([]);

  return (
    <>
      <Calculator logs={logs} setLogs={setLogs} />
      <Logs logs={logs} />
    </>
  );
}

export default App;
