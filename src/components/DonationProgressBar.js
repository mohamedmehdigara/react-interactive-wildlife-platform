// components/DonationProgressBar.js
import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  /* Styles for progress bar container */
  width: 100%;
`;

const ProgressBarWrapper = styled.div`
  /* Styles for progress bar wrapper */
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div`
  /* Styles for progress bar fill */
  width: ${({ progress }) => progress}%;
  background-color: #007bff;
  height: 20px;
`;

const DonationProgressBar = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <ProgressBarWrapper>
        <ProgressBarFill progress={progress} />
      </ProgressBarWrapper>
      <p>{progress}% Funded</p>
    </ProgressBarContainer>
  );
};

export default DonationProgressBar;
