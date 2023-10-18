import React, { useState, useEffect} from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: () => { },
    onLogout: (email,password) => { }
});


export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedLogin = localStorage.getItem('IsloggedIn')
        if (storedLogin === '1') {
          setIsLoggedIn(true);
        }
    
      }, []);


    const logoutHandler = () => {
        localStorage.setItem('IsloggedIn','0');
        setIsLoggedIn(false);
    };
    const loginHandler = () => {
        localStorage.removeItem('IsloggedIn');
        setIsLoggedIn(true);
    }
    return <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>{props.children}</AuthContext.Provider>
}


export default AuthContext;