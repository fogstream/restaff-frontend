import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Layout } from './components/Layout'
import PadawansInProgress from './components/Expert/PadawansInProgress'
import Order from './components/Expert/Order'
import Padawan from './components/Expert/Padawan'
import PadawansList from './components/Expert/PadawansList'

import './App.css';


const App = () => (
  <Router>      
    <Switch>
      <Route 
        path='/expert' 
        render={() => <Layout title='Дашбоард' role="expert"><PadawansInProgress /></Layout>} 
      />
      <Route 
        path='/order' 
        render={() => <Layout title='Создание заявки' role="expert"><Order /></Layout>} 
      />
      <Route 
        path='/padawans' 
        render={() => <Layout title='Падаваны'  role="expert">
          <PadawansList />
        </Layout>} 
      />
      <Route 
        path='/padawan/:id' 
        render={({ match }) => <Layout title='Падаван'  role="expert">
          <Padawan id={match.params.id} />
        </Layout>} 
      />
    </Switch>
  </Router>
)

export default App;