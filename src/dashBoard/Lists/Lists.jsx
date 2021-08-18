import { useEffect, useState } from "react";
import List from "./List/List";


export default function Lists({ list }) {
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSelect = (id) => {
    setId(id);
    setLoading(true);
    const url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      throw new Error(err)
    })
    .finally(
      setLoading(false)
    )
  }

  return(
    <div className='dashboar-lists'>
      <List list={list} select={handleSelect} />
      
    </div>
  );
}