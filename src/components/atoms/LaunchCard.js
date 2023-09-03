import React from 'react';
import styled from 'styled-components';

const LaunchCard = ({launchData}) => {

  const launchDate = {
    year: launchData.date_local.split('-')[0],
    month: launchData.date_local.split('-')[1],
    day: launchData.date_local.split('-')[2].split('T')[0],
    time: launchData.date_local.split('-')[2].split('T')[1]
  }

  return (
    <LaunchCardContainer>
      <LaunchCardHeader>
        <p>
          {launchDate.day} {launchDate.month} {launchDate.year}
        </p>
        <p>
          {launchData.flight_number}
        </p>
      </LaunchCardHeader>

      <LaunchCardBody>
        <h2>{launchData.name}</h2>
        
        <p>{launchDate.time} Local Time</p>
      </LaunchCardBody>
      
      
    </LaunchCardContainer>
  )
}

export default LaunchCard;

const LaunchCardContainer = styled.div`
  text-align: left;
  margin: 0 10px;
  background-color: #fff;
  margin-bottom: 20px;
  background: #454545;
  color: #fff;
  border-radius: 10px;
  box-shadow: 20px 20px 40px #3b3b3b, -20px -20px 40px #4f4f4f;
`;

const LaunchCardHeader = styled.div `
  // background-color: #000;
  
  padding: 1px 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
`;

const LaunchCardBody = styled.div`
  padding: 10px;
`;