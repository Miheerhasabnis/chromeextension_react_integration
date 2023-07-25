import React,{useState} from 'react';
import Cookies from 'js-cookie';

const MyComponent = () => {
  const [something,setsomething]=useState("empty");
  // Function to set the cookie
  const handleInputChange = (event) => {
    const value = event.target.value;
    setsomething(value);
  };
  const setCookieData = () => {
    const data = { username: something, email: 'john@example.com' };
    Cookies.set('userData', JSON.stringify(data), { expires: 7 });
     // Expires in 7 days
    alert("cookies set")
  };

  // Function to retrieve the cookie data

  // Function to delete the cookie
  const deleteCookieData = () => {
    Cookies.remove('userData');
    alert("cookies removed");
  };
  
  return (
    <div>
      <h1>{something}</h1>
      <input
            type="text"
            value={something}
            onChange={handleInputChange}
          />
      <button onClick={setCookieData}>Set Cookie</button>
      <button onClick={deleteCookieData}>Delete Cookie</button>
    </div>
  );
};

export default MyComponent;
