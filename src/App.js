

function App() {
  return (
    <div>
      <h2>Hello Docker</h2>
      <h1>Seems interesting</h1>
      <h4>I am good. Thank you.</h4>
      <h2>{`Hello ${process.env.REACT_APP_NAME}`}</h2>
      <h2 style={{color:"red"}}>Flower is red</h2>
      <h1>Docker-compose introduced</h1>
      <h1>Networking is pending</h1>
      <h1>Separate docker files for development and production </h1>
      
    </div>
  );
}

export default App;
