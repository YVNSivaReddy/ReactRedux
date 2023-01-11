import './App.css';
import React from 'react'
import { connect } from 'react-redux';
import { InAction,DecAction } from './Action';

const App = ({local_state,InAction,DecAction}) => {
  return (
    <div>
      {local_state} 
      <button onClick={()=>InAction(5)}>increment</button>
      <button onClick={DecAction}>decrement</button>
    </div>
  )
}
const mapStatetoProps = state => { return({
  local_state:state
})}
export default connect(mapStatetoProps,{InAction,DecAction})(App)



