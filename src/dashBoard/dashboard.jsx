import { useEffect, useState } from "react";
import Lists from './Lists/Lists';
import Spiner from './Spiner';

export default function DashBoard() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading({...true});
    console.log(loading)
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
    .then((response) => response.json())
    .then((data) => setList(data))
    .catch((err) => {
      throw new Error(err);
    })
    .finally(
      setLoading(false),
      console.log(loading)
    )
  }, [])

  return (
    <div className='dashboard'>
      {loading ? <Spiner /> : <Lists list={list} />}
    </div>
  );
}