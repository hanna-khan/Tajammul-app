import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  z-index: -1;
`;

const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #f89406;
  opacity: 0.5;
  z-index: -1;
`;

const Rect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background-color: #f89406;
  opacity: 0.5;
  z-index: -1;
`;

const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 1px;
  background-color: #f89406;
  opacity: 0.5;
  z-index: -1;
`;

const shapes = [<Circle key="circle" />, <Rect key="rect" />, <Line key="line" />];

const Background = () => {
  return (
    <Container>
      {shapes.map((shape) => shape)}
    </Container>
  );
};

export default Background;