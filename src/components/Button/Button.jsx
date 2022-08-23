import s from './Button.module.css';

export function Button({ onClick }) {
  return (
    <button onClick={onClick} type="button" className={s.button}>
      Load more
    </button>
  );
}
