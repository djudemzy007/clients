import { useEffect, useState } from 'react';
import ListOfSpaceXLaunches from './components/molecules/ListOfSpaceXLaunches';
import './App.css';
import styled from 'styled-components';

function App() {

  const [spacexData, setSpacexData] = useState([]);

  const getSpacexData = async () => {
    const response = await fetch('https://api.spacexdata.com/latest/launches');
    const data = await response.json();
    setSpacexData(data);
  }

  useEffect(() => {
    getSpacexData();
  })

  

  return (
    <div className="App">
      <StyledAppHeader>
        <h1>Upcoming SpaceX Launches</h1>
        {spacexData.length > 0 && <ListOfSpaceXLaunches spacexData = {spacexData} />}
    
      </StyledAppHeader>
      </div>
  );
}

export default App;

const StyledAppHeader = styled.div`
  background-color: #454545;
  color: #fff;
  padding: 10px;
`;
