import css from "../SearchBar/SearchBar.module.css";
import PropTypes from 'prop-types';

export default function SearchBar({ value, onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.query.value.trim());
  };

  return (
    <header>
      <form className={css.container} onSubmit={handleSubmit}> {/* Зміна на onSubmit */}
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func
};