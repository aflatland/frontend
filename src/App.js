import './App.css';
import React, { useState, useEffect } from 'react';



function App() {
  const [message, setMessage] = useState('...');

    useEffect(() => {
        // Update the URL to match the endpoint provided by your Django server
        fetch('http://django-env-simple.eba-rzdbpvac.us-west-2.elasticbeanstalk.com/json/')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);


  return (
    <div className="App">
      {message}
    </div>
  );
}

export default App;
