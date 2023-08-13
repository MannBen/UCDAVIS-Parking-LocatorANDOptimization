import { useState } from 'react'
import './App.css'

function CenterDiv(props) {
    const [gettingInput, setGettingInput] = useState(true);
    const [input, setInput] = useState("");

    function switchToMapGo() {
        setGettingInput(false);
    }

    function switchToMapEnter(e) {
        if (e.key == 'Enter')
            setGettingInput(false);
    }


    function switchToEntry() {
        setInput("");
        setGettingInput(true)
    }
    
    function handleInputChange(e) {
        setInput(e.target.value);
    }

    if (gettingInput) {
        return (
            <div>
                <label>Enter Hall</label>
                <input onChange={handleInputChange} onKeyDown={switchToMapEnter} value={input}/>
                <div onClick={switchToMapGo} val>Go!</div>
            </div>
        )
    } else { 
        return (
            <div>
                <p>{input}</p> 
                <div onClick={switchToEntry}>Enter New Location</div>
            </div>
        )
    }
}

function App() {
    return (
        <div className="App">
            <header>
                <h1>UC Davis Parking Locator</h1>
            </header>
            <main>
                <CenterDiv></CenterDiv>
            </main>
        </div>
    )
}

export default App
