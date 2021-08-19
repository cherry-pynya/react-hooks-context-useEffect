import { PropTypes } from 'prop-types';

export default function Card({ data }) {
  const { avatar, name, details } = data;
  const { city, company, position }= details;

  return(
    <div className='card' style={{width: '18rem'}}>
      <img src={avatar} className='card-img-top' alt='portrait' />
      <h5 className='card-title'>{name}</h5>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>City: {city}</li>
        <li className='list-group-item'>Company: {company}</li>
        <li className='list-group-item'>Position: {position}</li>
      </ul>
    </div>
  );
}

Card.propTypes =  {
  data: PropTypes.object.isRequired,
}