import React, { useState } from 'react';

let logoutTimer;

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (time) => {
  const currentTime = new Date().getTime();
  const adjustTime = new Date(time).getTime();
  const remainTime = adjustTime - currentTime;
  console.log('remainTime', remainTime);
  return remainTime;
};


const retrieveToken = () => {
  const token = localStorage.getItem('token');
}

export const AuthContextProvider = (props) => {
  const checkToken = localStorage.getItem('token');
  const [token, setToken] = useState(checkToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    localStorage.removeItem('token');
    setToken(null);
    if(logoutTimer) {
      clearTimeout(logoutTimer)
    }
  };

  const loginHandler = (token, expireTime) => {
    const loggedTime = new Date().getTime();
    setToken(token);
    localStorage.setItem('token', token);
    const autoLogoutTime = calculateRemainingTime(expireTime);
    logoutTimer = setTimeout(logoutHandler, 3000);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
