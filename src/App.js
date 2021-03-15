import React from 'react';
import Header from "./blocks/header"
import './App.css';

class App extends React.Component {

  state = {
    fetchedData: []
  }

  componentDidMount = async () => {
    console.log(`The state nowadays is: `)
    console.log(this.state)
    const incomingFetchData = await fetch("https://jsonplaceholder.typicode.com/comments");
    const parsedData = await incomingFetchData.json()
    let newStateData = [...this.state.fetchedData]
    this.setState(function () {
      newStateData = parsedData
      return { fetchedData: newStateData }
    })
    console.log('The state after fetch is: ')
    console.log(this.state)
  }

  render() {
    return (
      <Header

      />
    )
  }
}
export default App;
