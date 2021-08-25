import React from "react";
import "./app.css";

import { Header } from "@/components/Header";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="App">
      <Header>
        <p>Header</p>
      </Header>

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
