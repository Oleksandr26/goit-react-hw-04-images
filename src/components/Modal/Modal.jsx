import { useEffect, useCallback } from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

export function Modal({ onClose, children }) {
  const onCloseByEsc = useCallback(
    e => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', onCloseByEsc);
    return () => window.removeEventListener('keydown', onCloseByEsc);
  }, [onCloseByEsc]);
  // componentDidMount() {
  //   window.addEventListener('keydown', this.onCloseByEsc);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.onCloseByEsc);
  // }

  const onBackDrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={s.overlay} onClick={onBackDrop}>
      <div className={s.modal}>{children}</div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
