import React, { Component } from 'react'
import Lauches from './components/launches'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
// import { Menu } from 'semantic-ui-react'


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
       <h1>SpaceX</h1>
      <Lauches/>
      </ApolloProvider>
      
    )
  }
}

export default App
