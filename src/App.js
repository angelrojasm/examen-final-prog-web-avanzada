import {useState} from 'react';

function App() {
  const [events, setEvents] = useState(null);
  const [query, setQuery] = useState("")

  async function getEvents() {
    let message = await fetch("https://jsonplaceholder.typicode.com/photos")
    let jsonMessage = await message.json();
    console.log(jsonMessage)
  }

  return (
    <div className="App" style={{width: "100vw", height: "100vh", display: "flex", flexDirection: "column",justifyContent: "start", alignItems: 'center'}}>
      <h2>Event Finder</h2>
      <div class="inputs" style={{width: "20vw", display: 'flex', justifyContent: 'space-between'}}>
      <input style={{margin: '5vh 0'}}type="text" name="nickname" placeholder="Input" value={query} />
      <label for="name">Sort By: </label>
      <select name="Name" id="name">
        <option value="Category">City</option>
        <option value="City">Category</option>
        <option value="Name">Name</option>
      </select>
      </div>
      <button style={{width: '10vw',margin: '5vh 0'}} onClick={getEvents}>GetEvent</button>
      {events && <h3>{events}</h3>}
    onChange={(e)=>{setQuery(e.target.value)}} placeholder="nickname"
    </div>
  );
}

export default App;
