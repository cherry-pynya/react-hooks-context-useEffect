import { v4 as uuidv4 } from 'uuid';
import { PropTypes } from 'prop-types';


export default function List({ list, select }) {
  const handleClick = (e) => {
    select(e.target.id);
  };

  return(
    <div className='btn-group-vertical' onClick={handleClick}>
      {list.map((el) => {
        return(
          <button className='btn btn-secondary' id={el.id} key={uuidv4()}>{el.name}</button>
        );
      })}
    </div>
  );
}

List.propTypes =  {
  list: PropTypes.array.isRequired,
  select: PropTypes.func.isRequired,
}