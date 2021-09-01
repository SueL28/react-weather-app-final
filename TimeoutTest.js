import React from "react";

export default function alertHello(){
    alert("It has been 1 second")
}

setTimeout(function(){alertHello()}, 1000);

<button onClick={alertHello}>click me</button>