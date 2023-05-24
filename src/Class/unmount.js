import React from 'react'

export default class Unmount extends React.Component{
  constructor(){
    super();
    this.state ={
      show:false}
    }
  render(){
    return(
      <div>
        <h2>Component will unmount</h2>
        {this.state.show ? <Child/> : null}
        <button 
        onClick={() =>{this.setState({show:!this.state.show})}}>Toggle Button</button>
        </div>
    )
  }
}
class Child extends React.Component{
  componentWillUnmount(){
    console.log("component is hidden now")
  }
  render(){
    return(
      <div>
        <h1>Child Component</h1>
        </div>
    )
  }
}