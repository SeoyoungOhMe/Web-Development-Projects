import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />

      {notes.map(  input => (
        <Note 
          id={input.id}
          key={input.id}
          title={input.title}
          content={input.content}
        />
      )
      )}
      
      <Footer />
    </div>
  );
}

export default App;
