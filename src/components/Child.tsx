import React from "react";
import GrandChild from "./GrandChild";

const Child: React.FC = () => (
  <div style={{ border: "1px solid black", padding: 10 }}>
    <h3>子コンポーネント</h3>
    <GrandChild />
  </div>
);

export default Child;
