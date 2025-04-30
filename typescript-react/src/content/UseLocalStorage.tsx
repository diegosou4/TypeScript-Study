import React from "react"

const UseLocalStorage = (key : any, inicial : any) => {
    const [state, setState] = React.useState(() => {
      const local = window.localStorage.getItem(key);
      return local ? local : inicial;
    });
  
    React.useEffect(() => {
      window.localStorage.setItem(key, state);
    }, [key, state]);
  
    return [state, setState];
  };


export default UseLocalStorage;