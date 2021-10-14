// import './App.css';
import './utils/global/css/Global.css';
import { Routing } from './routes/Routing';
import { Header } from './components/header/Header';

function App() {
  return (
    <Routing>
      <Header />
    </Routing>
  );
}

export default App;
