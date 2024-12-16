import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div className='bg-white h-auto w-60 text-black ml-7 inline-block text-center p-4 rounded-lg shadow-md'>
      <img
        className='h-32 w-32 mx-auto mt-3 mb-2 rounded-full'
        src={props.photo}
        alt={`${props.username}'s profile`}
      />
      <h2 className='text-blue-400 text-lg'>{props.prof}</h2>
      <h2 className='text-black text-xl mb-1'>{props.username}</h2>
      <h1 className='text-black text-sm mb-2'>
        {props.city}, {props.age}
      </h1>
      <iframe
        src={props.mapLocation}
        width="250"
        height="150"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border rounded-md mx-auto overflow-hidden"
        title={`${props.username}'s Location`}
      ></iframe>
      <button className='bg-emerald-500 text-white p-2 rounded mt-3'>
        Add friend
      </button>
    </div>
  );
};

Card.propTypes = {
  photo: PropTypes.string.isRequired,
  prof: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  mapLocation: PropTypes.string.isRequired, // New prop for iframe location
};

export default Card;
