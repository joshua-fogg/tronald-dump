import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      quote: "",
    }
    this.setQuote = this.setQuote.bind(this)
  }
  handleOnClick() {
    getQuote(setQuote){
      apicall()

    }

  }

  render() {
    return (
      <div id='page'>
        <div className='title'><h1> Tronald Dump Quote Generator</h1></div>
        <div className='trump-button'>
          <button onClick={handleOnClick}>
            <g src='./ronaldo-dumpster.svg' />
          </button>
        </div>
        <div className='quote'>
          <p>
            {this.state.quote}
          </p>
        </div>

      </div >
    )
  }
}

export default App

