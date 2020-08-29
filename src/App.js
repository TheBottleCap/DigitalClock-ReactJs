import React, { useState } from "react";

const App = () => {
  // tolocaletimestring will give me the local time
  let newTime = new Date().toLocaleTimeString();

  // creating a new hook
  const [currentTime, setTime] = useState(newTime); // idhar we have passed newTime taaki wo current tiem ban jaye

  const GetTime = () => {
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    // humne is function mein setTime new time hi rakkha ahi kyunki wo local time le raha hai...name could be changed.
  };

  setInterval(GetTime,1000) // this we have used taaki humara har 1000ms ke baad apne aap GetTime function use hota rahe

  return (
    <div className="App">
      <center>
        <h1> {currentTime} </h1>{" "}
        {/*idhar we will currentime kyunki hamne new time ko useState se karliya hai current bana diya */}
 
      </center>
    </div>
  );
};

export default App;
