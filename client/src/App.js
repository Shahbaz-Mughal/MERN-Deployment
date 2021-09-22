import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import AllPets from './views/AllPets';
import CreatePet from './views/CreatePet';
import SinglePet from './views/SinglePet';

import EditPet from './views/EditPet';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <div className="header">
          <h1 className="display-2">Pet Shelter 🏡</h1>
        </div>

      <Switch>
        <Route exact path='/'>
          <AllPets/>
        </Route>
        
        <Route exact path='/pets/new'>
          <CreatePet/>
        </Route>

        <Route exact path='/pets/:_id'>
          <SinglePet/>
        </Route>
        
        <Route exact path='/pets/:_id/edit'>
          <EditPet/>
        </Route>
      </Switch>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
