import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [image, setimage] = useState('')

  const handleChange = () => {
    axios.get('https://api.generated.photos/api/v1/faces?api_key=tfQzSvbo6RoGf0uoQWvDPA&order_by=random')
    .then( res => {
      const uri = res.data.faces[0].urls[4][512];
      uri && setimage(uri);
    })
    .catch( err => {
      console.log(err.message);
    })
  }

  return (
    <div className="App">
      <h1>AI Photo Generator</h1> 

      {image && <img src={image} alt="AI don't works for U" /> }<br /><br />

      <button type="button" onClick={handleChange}>Click Me</button>
    
    </div>
  );
}

export default App;
