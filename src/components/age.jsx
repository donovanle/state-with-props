import React, { Component } from 'react'

export class Age extends Component {
    constructor(props){
        super(props)
        this.state={
            count: this.props.age
        }
    }

  render() {
    const{firstname, lastname, age, haircolor} = this.props
    return (
      <div>
          <h2>{lastname}, {firstname}</h2>
          <p>Age: {this.state.count}</p>
          <p>Hair color: {haircolor}</p>
          <button onClick={()=>this.setState({count: this.state.count+1})}>Birthday Button for {firstname} {lastname}</button>
      </div>
    )
  }
}

export default Age