import React from 'react';

const CitySelector = ({ cities, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default CitySelector;
