// TODO: Fix the return statement so that it renders an `h1` heading tag that introduces the creator
import React from "react";

function HelloDiv() {
  return (
    <div className="hellodiv">
      <h1>Hello</h1>
      <h2>My name is Felisha</h2>
      <p>I love dogs</p>
      <img src="https://place-puppy.com/300x300" alt="cute puppy" />
    </div>
    );
}

// TODO: Fix the export statement
// Export statements are ES6 syntax that tell Javascript what "thing" we want to make available outside of this file
export default HelloDiv
