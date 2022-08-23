import s from './Button.module.css';
import PropTypes from 'prop-types';

export function Button({ onClick }) {
  return (
    <button onClick={onClick} type="button" className={s.button}>
      Load more
    </button>
  );
}

Button.porpTypes = {
  onClick: PropTypes.func.isRequired,
};
