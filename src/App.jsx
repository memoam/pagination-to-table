import React, { useState, useEffect } from 'react';
import TableComponent from './components/table';
import getData from './services/getData';
import './App.css';

function App() {
  const [onChangeInput, setOnChangeInput] = useState('')
  const [value, setValue] = useState();
  const getDataAPI = () => {
    setValue();
    getData()
      .then((response) => response.json())
      .then((result) => {
        setValue(result);
      })
      .catch(() => {
        console.log('err');
      });
  };

  useEffect(() => {
    getDataAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const updateTable = (e) => {
    e.preventDefault();
    const prevState = {
      userId: Math.floor(Math.random() * 10),
      id: value.length + 1,
      title: onChangeInput,
      completed: false,
    }
    const prevData = [prevState, ...value]
    setValue(prevData)
  }
  return (
    <div className="App">
      <div className="top">
        <form className="form" name="newUserForm" onSubmit={updateTable}>
          <div className="formData">
            <label htmlFor="newUser">Create new</label>
            <input type="text" name="newUser" id="newUser" onChange={(e) => setOnChangeInput(e.target.value)} />
          </div>
          <button type="submit">Create</button>
        </form>
        <button type="button" onClick={() => getDataAPI()}>Reload</button>
      </div>
      {
        value === undefined ? (<p>Loading...</p>) : (<TableComponent props={value} />)
      }
    </div>
  );
}

export default App;
