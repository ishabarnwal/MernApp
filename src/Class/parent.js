import React from 'react'
import Child from './child'
export default class Parent extends React.Component {

constructor()
{
  super();
  this.state = {
    counter : 0
  }
}
render(){
  return(
    <div>
      <h2>Component Did Update</h2>
      <Child data= {this.state.counter}/>
      <button onClick={() => this.setState({counter :
       this.state.counter + 1})}>
      Update Counter {this.state.counter}
        </button>
      </div>
  )
}
}