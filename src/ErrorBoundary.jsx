import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  const errorHandler = (error, errorInfo) => {
    // fetch("jaahooowdjaw")
    //   .then((res) => res.json)
    //   .catch(() => {
    //     setHasError(true);
    //   });
    /*  if (!apiCall) {
      setHasError(true);
    } */
  };

  useEffect(() => {
    errorHandler();
  }, []);

  return <div>{hasError ? <h1>Error!</h1> : children}</div>;
}

export default ErrorBoundary;
