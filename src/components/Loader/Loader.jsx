import React from 'react';
import s from './Loader.module.css';
import { Circles } from 'react-loader-spinner';

export function Loader() {
  return (
    <div className={s.loader}>
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
