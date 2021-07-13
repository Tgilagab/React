import React, { useState } from "react";

export const SHbutton = (props) => {

	const [showText, setShowText] = useState(false);

  	const onClick = () => setShowText(!showText);

  const Text = () => 
  <div>
  	<p>Movie Details </p>
  	<props.Details />
  </div>;


  return (

    <div>

      <button onClick={onClick}>Movie</button>

      {showText ? <Text /> : null}


    </div>

  	);

  }

