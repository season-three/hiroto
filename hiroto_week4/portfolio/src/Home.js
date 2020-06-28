import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      Home
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}
