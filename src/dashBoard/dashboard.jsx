import { useEffect, useState } from "react";
import Lists from './Lists/Lists';
import Spiner from './Spiner';

export default function DashBoard() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
    .then((response) => response.json())
    .then((obj) => {
      setList(obj);
      setLoading(false)
    })
    .catch((err) => {
      throw new Error(err);
    })
  }, [])

  return (
    <div className='dashboard'>
      {loading ? <Spiner /> : <Lists list={list} />}
    </div>
  );
}