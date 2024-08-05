import React from "react";
import { UserContext } from "./App";

function GrandChild() {
  const User = React.useContext(UserContext);
  console.log(User, "ye i logged");
  return <div>this grandchild {User.name}</div>;
}

export default GrandChild;
