import React, { useState } from 'react';
import Button from '../../basics/Button';

function Filter({ onFilter }) {
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [gender, setGender] = useState('');

  const handleFilter = () => {
    onFilter(status, species, gender);
  };

  return (
    <div className="p-4">
      <select onChange={(e) => setStatus(e.target.value)} value={status} className="p-2 border rounded">
        <option value="">Status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select onChange={(e) => setSpecies(e.target.value)} value={species} className="p-2 border rounded">
        <option value="">Species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>

      <select onChange={(e) => setGender(e.target.value)} value={gender} className="p-2 border rounded">
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <Button label="Apply Filters" onClick={handleFilter} className="ml-2" />
    </div>
  );
}

export default Filter;
