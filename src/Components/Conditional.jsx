import React from 'react'
import Code from './Code';
import Welcome from './Welcome';

function Conditional() {
 const display = true;
let message = display ? <h1>Hello there</h1> : <h4> no it;s Flase</h4>

return message;
}

export default Conditional
