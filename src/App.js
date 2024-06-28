import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AppContext } from "./context/contextApi";
import Header from "./components/Header";
import Feed from "./components/Feed";


const App = () => {
  return (    
      <div className="flex flex-col h-full">
      <BrowserRouter>
      <Header />
      </BrowserRouter>
      <AppContext>

      </AppContext>
      
      
      </div>
      
    
);
};

export default App;
