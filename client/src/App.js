// Embedding Stylesheets In Your Main Component App
// import './App.css';

// import React, {Component} from 'react';
// import Header from './layout/header';
// import Main from './layout/main';

// import { Router } from 'react-router';
// import createHashHistory from 'history/createHashHistory';

// const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

// class App extends Component {
//   render() {
//     return (
//         <Router history={hashHistory}>
//           <div className="App">
//             <Header/>
//             <Main/>
//           </div>
//         </Router>
//     )
//   }
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import Home from './pages/Home';
// import Detail from './pages/Detail';
// import NoMatch from './pages/NoMatch';
// import Login from './pages/Login';
import Signup from './pages/signup';
// import helloworld from './pages/helloworld';
import Blog from './pages/blog';
import Login from './pages/login';
import Picture from './pages/picture';
import Resources from './pages/resources';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>

<Router>
        <div>
            <Routes>
              <Route 
                path="/" 
                element={<Blog />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/picture" 
                element={<Picture />} 
              />
              <Route 
                path="/resources" 
                element={<Resources />} 
              />
            </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
