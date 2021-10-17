import "./App.css"
import Hello from "./hello.mdx"
import CSSX from "mdx-cssx"
function App() {
  return (
    <CSSX>
      <div className="App">
        <Hello />
      </div>
    </CSSX>
  )
}

export default App
