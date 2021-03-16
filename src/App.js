import React from 'react';
import Header from "./blocks/header"
import Results from "./blocks/results"
import Pagination from "./blocks/pagination"
import './App.css';

class App extends React.Component {

  state = {
    fetchedData: [],
    pageItems: [1, 2],
    currentPage: 1,
    itemsOnPage: 10,
    allPagesQty: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }

  pageHandler(evt) {
    let page = parseInt(evt.target.id) + 1
    console.log(page)
    let allData = [...this.state.fetchedData]
    let finalPage = page * 10 + 1
    let startPage = page * 10 - 9
    let newPages = allData.slice(startPage, finalPage)
    console.log(newPages)
    this.setState(function () {
      return { pageItems: newPages }
    })
  }

  componentDidMount = async () => {
    const incomingFetchData = await fetch("https://jsonplaceholder.typicode.com/comments");
    const parsedData = await incomingFetchData.json()

    // Setting a fetch data
    let newStateData = [...this.state.fetchedData]
    this.setState(function () {
      newStateData = parsedData
      return { fetchedData: newStateData }
    })

    // Setting page data
    let newActivePages = [...this.state.pageItems]
    let firstPageItems = parsedData.slice(0, 10)
    this.setState(function () {
      newActivePages = firstPageItems
      return { pageItems: newActivePages }
    })
  }


  render() {
    return (
      <>
        <Header />
        <Results
          listData={this.state.pageItems}
          allPagesFck={this.state.allPagesQty}
        />
        <Pagination
          currentPage={this.state.currentPage}
          allPagesQty={this.state.allPagesQty}
          clicky={this.pageHandler.bind(this)}
        />
      </>
    )
  }
}
export default App;
