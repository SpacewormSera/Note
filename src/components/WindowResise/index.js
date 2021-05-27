import React, { useEffect, useState } from "react";

// function a(x) {
//   console.log("a");
// }

// function b() {
//   console.log("b");
//   return 5;
// }

// a(b());

function WidthComponent() {

  const [windowSize, setWindowSize] = useState('');

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.deleteEventListener('resize', handleResize);

  }, []);

  return (
    <>
      <div>Width {windowSize}</div>
    </>
  );
}

export default WidthComponent;
