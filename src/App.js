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
    itemsOnPage: 50,
    allPagesQty: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }

  pageQtySetter() {
    let pageQty = this.state.fetchedData / this.state.itemsOnPage
    console.log(pageQty)
  }

  pageHandler(evt) {
    let page = parseInt(evt.target.id) + 1
    console.log(page)
    let allData = [...this.state.fetchedData]

    let startPage
    let finalPage
    if (page === 1) {

      startPage = page - 1
      finalPage = page * this.state.itemsOnPage
    } else {
      startPage = page * this.state.itemsOnPage - this.state.itemsOnPage
      finalPage = page * this.state.itemsOnPage
    }
    console.log(startPage, finalPage)


    let newPages = allData.slice(startPage, finalPage)
    console.log(newPages)
    this.setState(function () {
      return { pageItems: newPages }
    })

    this.setState(function () {
      return { currentPage: page }
    })

    console.log(this.state)
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
    let firstPageItems = parsedData.slice(0, this.state.itemsOnPage)
    this.setState(function () {
      newActivePages = firstPageItems
      return { pageItems: newActivePages }
    })

    // Setting page quantity
    let pageQty = this.state.fetchedData.length / this.state.itemsOnPage
    console.log(pageQty)
    let array = []
    // oldSchool /m/
    for (let i = 0; i < pageQty; i++) {
      array.push(i + 1)
    }
    console.log(array)
    this.setState((function () {
      return { allPagesQty: array }
    }))
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
