import React, { useState } from 'react';

const ToggleLight = () => {

  const [ isOn, setIsOn] = useState(false);

  function toggle() {
    setIsOn(!isOn)
  }

  return (<div>
    <button onClick={toggle}>Turn {isOn ? "on" : "off"} the lust</button>
  </div>)

}

export default ToggleLight;