import React from "react";
import { useState, useEffect, useLayoutEffect, useCallback, useMemo } from "react";
import axios from "axios";

import FirstPhase from "./components/firstPhase";
import SecondPhase from "./components/secondPhase";
import ThirdPhase from "./components/thirdPhase";

import './App.css';

function App() {

  const [name, setName] = useState('')
  const [selectByName, setSelectByName] = useState(false)
  const [allData1, setAllData1] = useState([]);
  const [allData2, setAllData2] = useState([]);
  const [allData3, setAllData3] = useState([]);
  const [nameStage1, setNameStage1] = useState([]);
  const [nameStage2, setNameStage2] = useState([]);
  const [nameStage3, setNameStage3] = useState([]);

  const fetchAllTask = () => {
    axios.get(`http://localhost:3001/task`)
      .then((res) => {
        setAllData1(res.data[0]['Stage 1'])
        setAllData2(res.data[0]['Stage 2'])
        setAllData3(res.data[0]['Stage 2'])
      })
      .catch((err) => {
        console.log("fetchAllTask err: ", err);
      });
  }

  const fetchByName = (name) => {
    axios.get(`http://localhost:3001/task/select-by-name?name=${name}`)
      .then((res) => {
        setSelectByName(true);
        setNameStage1(res.data[0]['Stage 1']);
        setNameStage2(res.data[0]['Stage 2']);
        setNameStage3(res.data[0]['Stage 3']);
      })
      .catch((err) => {
        console.log("Err in fetchByName: ", err);
      });
  }

  useLayoutEffect(() => {
    if (name) {
      fetchByName(name)
    }
  }, [name])

  useLayoutEffect(() => {
    fetchAllTask()
  }, [])

  useEffect(() => {
    if(name === 'All') {
      setSelectByName(false)
      fetchAllTask()
    }
  }, [name])

  return (
    <>
      <div className="App">
        <h1>Wireframe</h1>
        <div className="row">
          <h3 className="col-9"> Task</h3>

          <div className="col-3">
            <select class="form-select" id="name" value={name}
              onChange={(e) => 
              setName(e.target.value)
              }>
              <option value="All">All assignee</option>
              <option value="David">David</option>
              <option value="Perry">Perry</option>
              <option value="Tommy">Tommy</option>
              <option value="Tony">Tony</option>
              <option value="Sandy">Sandy</option>
              <option value="Allen">Allen</option>
              <option value="Mathew">Mathew</option>
              <option value="Mat">Mat</option>
            </select>
            <p>Filtered by assignee: {name}</p>
          </div>
        </div>

        <div class="container">
        {selectByName === false ? <FirstPhase data={allData1} /> : <FirstPhase data={nameStage1} />}
        <p><br /></p>
        {selectByName === false ? <SecondPhase data={allData2} /> : <SecondPhase data={nameStage2} />}
        <p><br /></p>
        {selectByName === false ? <ThirdPhase data={allData3} /> : <ThirdPhase data={nameStage3} />}
        </div>
      </div>
    </>
  );
}

export default App;
