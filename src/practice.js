import React, { useEffect } from "react";
 
function Practice(){
  useEffect(() => {
    const intervalId = setInterval(() => {
      document.title = `Time is: ${new Date()}`;
    }, 1000);
 
    return () => {
      document.title = "Time stopped.";
      clearInterval(intervalId);
    }
  }, []);
 
  return <h1>What time is it?</h1>;
};

export default Practice;