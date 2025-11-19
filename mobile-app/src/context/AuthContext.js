import React, { createContext, useState, useContext, useEffect } from 'react';
// import { auth } from '../services/firebase'; // In real app

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock auth check
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    // Real implementation:
    // const unsubscribe = auth.onAuthStateChanged(user => {
    //   setUser(user);
    //   setIsLoading(false);
    // });
    // return unsubscribe;
  }, []);

  const login = async (email, password) => {
    // Mock login
    setUser({ email, uid: '123' });
    return true;
  };

  const logout = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
