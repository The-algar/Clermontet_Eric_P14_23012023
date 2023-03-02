import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import CreateEmployee from './pages/CreateEmployee'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

function LoginLogoutButton() {
    // The useState hook is used to manage the state of the button. 
    // the useState hook retrieves the isLoggedIn state from local storage using 
    // localStorage.getItem('isLoggedIn'). If the value is 'true', the user is considered logged in, 
    // otherwise they are not logged in.
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  // The useNavigate hook provides a way to programmatically navigate to different routes in a React Router-based application.
  const navigate = useNavigate();

  // I use the useEffect hook to store the 'isLoggedIn' state in local storage every time the state changes.
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div>
      <Button onClick={() => {
        setIsLoggedIn(!isLoggedIn);
        if (isLoggedIn) {
          navigate('/');
        } else {
          navigate('/Create');
        }
      }}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </Button>
      {isLoggedIn} {/* && <p>You are logged in</p> */}
    </div>
  );
}

export default LoginLogoutButton;

const Button = styled.button`
  background-color: ${colors.secondary};
  font-size: 1em;
  font-weight: bold;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
              0 1px 5px 0 rgba(0, 0, 0, 0.12),
              0 3px 1px -2px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${colors.mainBgColor};
  }
`