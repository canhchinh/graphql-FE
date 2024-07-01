import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Project from './pages/Project';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const client = new ApolloClient({
  uri: 'http://localhost:3456/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects/:id' element={<Project />} />
              <Route path='*' element={<p>404</p>} />
            </Routes>
          </div>
        </Router>
        <ToastContainer />
      </ApolloProvider>
    </>
  );
}

export default App;
