// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from 'react';

function Greeting() {
  // Convert `greeting` to a state variable using the useState hook. Give it a initial value of 'Welcome the following students to class!'
  let [greeting, setGreeting] = useState ('Welcome the following students to class!');

  // Convert `group` to a state variable using the useState hook. Set to an initial value to an array including three students in your class. (ex. ["John", "Grace", "Jared"])
  let [group, setGroup] = useState (['Jaeger', 'Rachel', 'Jonathan', 'Felisha']);

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">State activity!</div>
      <div className="card-body">
        {/* Fix the `p` tag below to instead render the `greeting` variable */}
        <p className="card-text">{greeting}</p>
        <ul>
          {/* Fix the list below so that each member of your group is accessed from the `group` array */}
          {/* <li>{group[0]}</li>
          <li>{group[1]}</li>
          <li>{group[2]}</li>
          <li>{group[3]}</li> */}
          {group.map((person,i)=><li key={i}>{person}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Greeting;
