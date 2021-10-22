// import './App.css';

import "./utils/global/css/Global.css";
import { Main } from "./routes/Routing";
import { UserProvider } from "./utils/provider/UserProvider";

function App() {
  return (
    <UserProvider>
      <Main></Main>
    </UserProvider>
  );
}

export default App;
