import React, {useState} from 'react'
import '../styles/App.css';

const App = () => {
  const [shapes, setShapes] = useState([]);
  const [selectedShape, setSelectedShape] = useState('Square');

  const handleShapeChange = (event) => {
    setSelectedShape(event.target.value);
  };

  const handleAddShape = () => {
    setShapes([...shapes, selectedShape]);
  };
  return (
    <div id="main">
      <div id="shape-creator">
        <select value={selectedShape} onChange={handleShapeChange}>
          <option value="Square">Square</option>
          <option value="Circle">Circle</option>
        </select>
        <button onClick={handleAddShape}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        {shapes.map((shape, index) => (
          <div key={index} className={shape.toLowerCase()}>
            {shape} {index + 1}
          </div>
        ))}
      </div>
    </div>
  )
}


export default App;