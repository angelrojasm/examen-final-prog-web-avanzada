import {useState} from 'react';
import Card from './card'
function App() {
  const [events, setEvents] = useState(null);
  const [query, setQuery] = useState("")

  async function getEvents() {
    let message = await fetch("https://jsonplaceholder.typicode.com/photos")
    let jsonMessage = await message.json();

    let finalArray = jsonMessage.filter(word => word.title.includes(query));
    setEvents(finalArray)
    console.log(finalArray)
  } 

  function generateEvents() {
    return events.map((ev) =>{
      return <Card thumbnailUrl={ev.thumbnailUrl} title={ev.title} id={ev.id} />
    })
  }

  return (
    <div className="App" style={{width: "100vw", height: "100vh", display: "flex", flexDirection: "column",justifyContent: "start", alignItems: 'center'}}>
      <h2>Event Finder</h2>
      <input style={{margin: '5vh 0'}}type="text" name="nickname" placeholder="Input" onChange={(e)=> {setQuery(e.target.value)}} />
      <button style={{width: '10vw',margin: '5vh 0'}} onClick={getEvents}>GetEvent</button>
      {events && (
      <div>
        <h3>Results are: </h3>
        {generateEvents()}
      </div>)}
    </div>
  );
}

export default App;
