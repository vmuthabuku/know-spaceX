import React, { Component } from 'react'
import Launches from './components/launches'
import Launch from './components/launch'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Container } from 'semantic-ui-react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';


const client = new ApolloClient({
  uri: '/graphql'
})

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
      <Router>
      <Container className="container" text>
          <h1 className="topic">SpaceX</h1>
          <Route exact path="/" component={Launches} />  
          <Route exact path="/launch/:flight_number" component={Launch} /> 
      </Container>
      </Router>
      
      </ApolloProvider>
      
    )
  }
}

export default App
