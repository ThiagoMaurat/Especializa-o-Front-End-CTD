import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import styles from "./style.module.css";

function App() {
  const [pageRick, setPageRick] = useState(1);
  const { data } = useQuery(["test", pageRick], async (page) => {
    const fetch = await axios.get(`https://rickandmortyapi.com/api/character`, {
      params: { page: pageRick },
    });
    const data = await fetch.data?.results;
    console.log(data);
    return data;
  });
  return (
    <div className={styles.wrapper}>
      {data?.map((item: any) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
      <button onClick={() => setPageRick(pageRick + 1)}>Next</button>
      <button onClick={() => setPageRick(pageRick - 1)}>Previous</button>
    </div>
  );
}

export default App;
