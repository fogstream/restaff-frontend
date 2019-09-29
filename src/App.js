import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Layout } from './components/Layout'
import PadawansInProgress from './components/Expert/PadawansInProgress'
import Order from './components/Expert/Order'
import Padawan from './components/Expert/Padawan'
import PadawansList from './components/Expert/PadawansList'
import Dashboard from './components/HR/Dashboard'
import NewOrder from './components/HR/NewOrder'

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
      <Route 
        path='/hr' 
        render={() => <Layout title='Дашбоард'  role="hr">
          <Dashboard />
        </Layout>} 
      />
      <Route 
        path='/new_order/:id' 
        render={() => <Layout title='Необработанная заявка'  role="hr">
          <NewOrder />
        </Layout>} 
      />
      <Route 
        path='/new_order/:id' 
        render={() => <Layout title='Сотрудники'  role="hr">
          <NewOrder />
        </Layout>
        } 
      />
    </Switch>
  </Router>
)

export default App;