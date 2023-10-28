import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Table from "./components/Table";

function App() {
  const apiURL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${apiURL}${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, [reqType]);
  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      {/* <List items={items} /> */}
      <Table
      items={items}
      />
    </div>
  );
}

export default App;
