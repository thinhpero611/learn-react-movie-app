import React, { useState } from 'react';

// set up global context and state
export const Context = React.createContext();

const UserProvider = ({ children }) => {
  const [state, setState] = useState(undefined);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  )
}

export default UserProvider;