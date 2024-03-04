import { Route, Routes } from 'react-router-dom';
import './app.css';
import Chat from './pages/Chat';
import Feedback from './pages/Feedback';
import Interaction from './pages/Interaction';
import NearbyBars from './pages/NearbyBars';
import QuickMenu from './pages/QuickMenu';
import Splash from './pages/Splash';

export function App() {
  return (
    <Routes>
      <Route path="/" Component={Splash} />
      <Route path="/quick-menu" Component={QuickMenu} />
      <Route path="/interaction" Component={Interaction} />
      <Route path="/feedback" Component={Feedback} />
      <Route path="/near-by-bars" Component={NearbyBars} />
      <Route path="/chat" Component={Chat} />
    </Routes>
  );
}

export default App;
