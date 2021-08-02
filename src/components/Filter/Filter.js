import PropTypes from 'prop-types';
import s from './Filter.module.css';

export const Filter = ({ value, onInputChange }) => {
  return (
    <div className={s.filter}>
      <label className={s.filterLabel}>
        Find contacts by name
        <input
          className={s.filterInput}
          type="text"
          name="filter"
          value={value}
          onChange={onInputChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func,
};