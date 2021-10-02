import { useState, useEffect } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount(count + 1);
  };

  // useEffect(() => {
  //   console.log("useEffect - every state and prop change");
  // });

  useEffect(() => {
    console.log("dependance change");
    return () => {
      console.log("cleanup/Unmounting...");
    }
  }, [count]);

  // useEffect(() => {
  //   console.log("Mounting... call only onetime []");
  //   return () => {
  //     console.log("cleanup/Unmounting...");
  //   }
  // }, []);


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const actualWidth = () => {
    setWindowWidth(window.innerWidth);
    console.log(windowWidth);
  };

  // cleanup function
  useEffect(() => {
    console.log("add event");
    window.addEventListener("resize", actualWidth);
    return () => {
      console.log("remove event");
      window.removeEventListener("resize", actualWidth);
    };
  }, [windowWidth]);

  return (
    <>
      <h1>Hooks</h1>
      <h5>{count}</h5>
      <button className="btn btn-primary" onClick={incCount}>
        Click here to Plus
      </button>
      <h1 className="mt-5">Window Width</h1>
      <p style={{ maxWidth: windowWidth }} data-width={windowWidth}>
        resize {windowWidth}
      </p>
    </>
  );
}

export default Hooks;
