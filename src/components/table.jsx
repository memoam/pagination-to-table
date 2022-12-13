import React, { useState } from 'react';
import './table.css';

function TableComponent({ props }) {
  const pagina = [...Array(Math.ceil(props.length / 10)).keys()];
  const [datePage, setDatePage] = useState(props.slice(0, 10))
  const [btn, setBtn] = useState(1)
  const actbtn = (number) => {
    setDatePage(props.slice(number * 10, number * 10 + 10));
    setBtn(number + 1);
  }
  return (
    <div className="TableComponent">
      <div className="pag">
        {pagina.map((number, index) => {
          const keyIndex = index + 1;
          return (
            <button key={keyIndex} type="button" className={btn === number + 1 ? 'actbtn' : null} onClick={() => actbtn(number)}>{number + 1}</button>
          );
        })}
      </div>
      <div className="tableTitle">
        <p className="data">#</p>
        <p className="data">User</p>
        <p className="dataD">Description</p>
        <p className="data">Completed</p>
      </div>
      {datePage.map((data, index) => {
        const keyIndex = index + 1;
        return (
          <div className="table" key={keyIndex}>
            <p className="data">{data.id}</p>
            <p className="data">{data.userId}</p>
            <p className="dataD">{data.title}</p>
            <p className="data">{data.completed ? 'o' : 'x'}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TableComponent;
