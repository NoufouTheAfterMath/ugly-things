import React from "react";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import Header from "./components/Header";


let App = () => (
  <div>
    <Header title="WHAT'S UGLY!!!" subTitle="I may be drunk, Miss, but in the morning I will be sober and that will still be ugly." />
    <Form />
    <ItemList />
  </div>
)

export default App;
