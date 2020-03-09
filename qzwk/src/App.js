import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import cookie from 'react-cookies';
// import store from './store';
import { connect } from 'react-redux';
import Login from "./components/login"
function App() {
  return (
    <div className="App">
        <Login />
    </div>
  );
}

export default App;
