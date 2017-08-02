import React, { Component } from 'react'


import { getQuote } from '../Api'

const style = {
  width: "50%"
}

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      quote: ""
    }

    this.setQuote = this.setQuote.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
    //this.style = {styling}      this. refers to the class.
  }
  handleOnClick(e) {
    getQuote(this.setQuote)
  }

  setQuote(err, quoted) {
    if (!err) {
      this.setState({ 'quote': quoted.value })
    } else (console.log('quote not recieved'))

  }

  render() {
    return (
      <div id='page'>
        <div className='title'><h1> Tronald Dump Quote Generator</h1></div>
        <div className='trump-button'>
          <button onClick={this.handleOnClick}>
            <img src="./Tronald_Dump.png" alt="FFS!!!" style={style} />
            {/*this would ebcome this.style*/}
          </button>
        </div>
        {this.state.quote && <div className='quote'>
          <p key={1}>
            {this.state.quote}
          </p>
          <p>
            - Tronald Dump
          </p>
        </div>}

      </div >
    )
  }
}

export default App

