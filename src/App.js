// import './App.css';

import "./utils/global/css/Global.css";
import { Main } from "./routes/Routing";
import { UserProvider } from "./utils/provider/UserProvider";
import { SettingsProvider } from "./utils/provider/SettingsProvider";
function App() {
  return (
    <UserProvider>
      <SettingsProvider>
        <Main></Main>
      </SettingsProvider>
    </UserProvider>
  );
}

export default App;
