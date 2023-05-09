import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Login, { setAuthToken } from './pages/login/Login';
import Header from './components/header/Header';
import List from './components/list/List';
import { TodoProvider } from './context/Todo';
import Task from './components/task/Task';
import { RouteGuard } from './utils/RouteGuard';
import { AuthProvider } from './context/Auth';

function App() {
  const token = localStorage.getItem("accessToken");
  if (token) {
      setAuthToken(token);
  }

  return (
    <Router>
    <AuthProvider>
      
      <Header/>
     
        <Routes>
          <Route path="/" element={ <Login/>}/>
          <Route path="/dashboard" element={<RouteGuard>
                                              <Dashboard>
                                                  <TodoProvider>
                                                    <Task/>
                                                    <List/>
                                                  </TodoProvider>
                                              </Dashboard>
                                          </RouteGuard>}
          />
        </Routes>
    
    </AuthProvider>
    </Router>
  );
}

export default App;
