import React from 'react';
import Header from "./blocks/header"
import Results from "./blocks/results"
import './App.css';

class App extends React.Component {

  state = {
    fetchedData: [],
    activeItems: [1, 2],
    currentPage: 0,
    allPagesQty: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }

  pageHandler(page = this.state.currentPage) {
    let neededPage = page + 1
    let copy = [...this.state.fetchedData]

    let activePage = copy.slice(neededPage, neededPage + 9)
    let newActiveItems = [...this.state.activeItems]
    this.setState(function () {
      newActiveItems = activePage
      return { activeItems: newActiveItems }
    })
    console.log(this.state.activeItems)
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
    this.activeItems.push(this.state.fetchedData)
    console.log(this.state)
  }


  render() {
    return (
      <>
        <Header />
        <Results
          await listData={this.state.fetchedData}
          allPagesFck={this.state.allPagesQty}
          clicky={this.pageHandler}
        />
      </>
    )
  }
}
export default App;
