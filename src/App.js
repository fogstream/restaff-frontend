import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Layout } from './components/Layout'
import PadawansInProgress from './components/Expert/PadawansInProgress'
import Order from './components/Expert/Order'
import Padawan from './components/Expert/Padawan'
import PadawansList from './components/Expert/PadawansList'

import Dashboard from './components/HR/Dashboard'
import NewOrder from './components/HR/NewOrder'
import NewOrders from './components/HR/NewOrders'
import Employees from './components/HR/Employees'
import EmployeeInfo from './components/HR/EmployeeInfo'
import Positions from './components/HR/Positions'
import Experts from './components/HR/Experts'
import ExpertInfo from './components/HR/ExpertInfo'
import PositionInfo from './components/HR/PositionInfo'

import Login from './components/Login'
import EmployeeDashboard from './components/Employee/EmployeeDashboard';
import EmployeeProfile from './components/Employee/EmployeeProfile';

import './App.css';

export const MyContext = React.createContext({ a: 2 })


const App = () => {
  const [state, setState] = React.useState({})

  return (
    <MyContext.Provider value={{ state, setState }}>
      <Router>      
        <Switch>
          <Route 
            path='/login'
            exact
            render={() => <Login />} 
          />
          <Route 
            path='/expert'
            exact
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
            path='/employees' 
            render={() => <Layout title='Сотрудники'  role="hr">
              <Employees />
            </Layout>
            } 
          />
          <Route 
            path='/employee/:id' 
            render={() => <Layout title='Сотрудник'  role="hr">
              <EmployeeInfo />
            </Layout>
            } 
          />
          <Route 
            path='/new_orders' 
            render={() => <Layout title='Новые заявки'  role="hr">
              <NewOrders />
            </Layout>
            } 
          />
          <Route 
            path='/positions' 
            render={() => <Layout title='Должности'  role="hr">
              <Positions />
            </Layout>
            } 
          />
          <Route 
            path='/experts' 
            render={() => <Layout title="Эксперты"  role="hr">
              <Experts />
            </Layout>
            } 
          />
          <Route 
            path='/expert/:id'
            render={() => <Layout title='Эксперт' role="hr"><ExpertInfo /></Layout>} 
          />
          <Route 
            path='/position/:id'
            render={() => <Layout title='Должность' role="hr"><PositionInfo /></Layout>} 
          />
           <Route 
              path='/employee'
              exact
              render={() => <Layout title='Дашбоард'  role="employee">
                <EmployeeDashboard />
              </Layout>} 
            />
          <Route 
            path='/profile'
            render={() => <Layout title='Профиль' role="employee"><EmployeeProfile /></Layout>} 
          />
        </Switch>
      </Router>
    </MyContext.Provider>
  )
}

export default App;