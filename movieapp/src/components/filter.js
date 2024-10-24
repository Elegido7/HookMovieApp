import React from 'react';

const Filter = ({ filter, setFilter }) => {
  const handleTitleChange = (e) => {
    setFilter({ ...filter, title: e.target.value });
  };

  const handleRatingChange = (e) => {
    setFilter({ ...filter, rating: Number(e.target.value) });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filter.title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        min="0"
        max="5"
        placeholder="Filter by rating"
        value={filter.rating}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;
