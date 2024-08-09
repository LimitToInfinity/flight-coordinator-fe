import { Route, Routes } from 'react-router-dom';

import Login from './Login';
import Authorized from './Authorized';
import Travels from './Travels';

function MyRoutes() {

  return (
    <Routes>
      <Route path='/' />
      <Route path='/login' Component={Login} />
      <Route path='/choose' Component={Authorized} />
      <Route path='/flights' Component={Travels} />
    </Routes>
  );
}

export default MyRoutes;