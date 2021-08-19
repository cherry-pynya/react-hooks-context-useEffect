import { useState } from "react";
import { PropTypes } from 'prop-types';
import List from "./List/List";
import Card from './Card/Card';

export default function Lists({ list }) {
  const [id, setId] = useState(null);
  const [data, setData] = useState({})

  const handleSelect = (id) => {
    const url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setData(data)
      setId(id)
    })
    .catch((err) => {
      throw new Error(err)
    })
  }

  return(
    <div className='dashboar-lists'>
      <List list={list} select={handleSelect} />
      {id && <Card data={data} />}
    </div>
  );
}

Lists.propTypes =  {
  list: PropTypes.array.isRequired,
}