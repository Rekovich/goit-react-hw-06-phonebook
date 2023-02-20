import React from 'react';
import { nanoid } from 'nanoid';
import css from './filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, onChangeFilter }) => {
  const filterInputId = nanoid(4);
  return (
    <div>
      <label htmlFor={filterInputId} className={css.formLabel}>Find contacts by name</label>
      <input
        className={css.formInput}
        type="text"
        name="filter"
        id={filterInputId}
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
}

export default Filter;