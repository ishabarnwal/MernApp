import React from 'react'
export default class Child extends React.Component {

  constructor()
  {
    super();
    this.state = {
      counter : 0
    }
  }
  componentDidUpdate(pP,pS,sS)
  {
    console.log("method called", pP.data, this.props.data);
  }
  render(){
    return(
      <div>
        <h2>Child Component {this.props.data}</h2>
        </div>
    )
  }
  }