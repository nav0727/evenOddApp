/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandom = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandom()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <div className="bg-container">
          <h1>Count {count} </h1>

          <p className="desc">Count is {text}</p>
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100 </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
