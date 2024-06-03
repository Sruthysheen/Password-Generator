  /* eslint-disable react/prop-types */
  import { createContext, useState } from "react";

  export const AuthContext = createContext(); // Component name should be capitalized

  const AuthProvider = ({ children }) => { // Component name should be capitalized
    const [signupModal, setSignupModal] = useState(false);

    const handleSignupOpen = () => {
      setSignupModal(prevState => !prevState); // Correct way to toggle
    };

    return (
      <AuthContext.Provider value={{ signupModal, handleSignupOpen }}>
        {children}
      </AuthContext.Provider>
    );
  };

  export default AuthProvider;
