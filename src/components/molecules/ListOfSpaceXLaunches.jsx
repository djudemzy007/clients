import React from 'react'
import LaunchCard from '../atoms/LaunchCard';
import styled from 'styled-components';

const ListOfSpaceXLaunches = ({spacexData}) => {

    // const upcomingLaunches = spacexData.filter(launch => launch.upcoming === true);

    const upcomingLaunches = spacexData.filter(launch => new Date(launch.date_local) > new Date());

  return (
    <div>
        <StyledContainer>
            {upcomingLaunches.length > 0 && upcomingLaunches.map(data => (
            <LaunchCard launchData = {data} key = {data.flight_number} />
            ))}
        </StyledContainer>
    </div>
  )
}

export default ListOfSpaceXLaunches;

const StyledContainer = styled.div`
    background-color: #454545;
`;