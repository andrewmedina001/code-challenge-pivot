import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// Search absolute import documentation for more info and check vite.config.js file for details of configuring vite
import { Home } from '@pages/home/Home';
import { Dashboard } from '@pages/dashboard/Dashboard';

const head = document.getElementsByTagName('head')[0];
const facebookMetaData = document.createElement('meta');
facebookMetaData.setAttribute('property', 'og:image');
facebookMetaData.setAttribute('content', 'http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg');
head.appendChild(facebookMetaData);


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />}>
          {/* <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/products" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
