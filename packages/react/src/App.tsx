import React from "react";
import "./App.css";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Header</p>
      </header>

      <main>
        <form>
          <label>
            Name:
            <input type="input" name="name" />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
};

export default App;
