import { Component } from 'react'
import Header from './Header/Header'
import Banner from './Banner/Banner'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
      </div>
    )
  }
}
