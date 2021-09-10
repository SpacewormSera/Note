import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux'
import './index.css';

const Charts = () => {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = `rgba(0, 40, 40, ${1})`;
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(20, 20);
    ctx.closePath();
    ctx.stroke()
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        width="250" height="250">
        
      </canvas>
    </>
  );
}


export default connect(null, null)(Charts);
