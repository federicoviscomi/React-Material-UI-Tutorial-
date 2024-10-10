import './App.css';
import { MuiButton } from './components/MuiButton';
import { MuiTypography } from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      <div>
        <MuiTypography />
      </div>
      <div>
        <MuiButton></MuiButton>
      </div>
    </div>
  );
}

export default App;
