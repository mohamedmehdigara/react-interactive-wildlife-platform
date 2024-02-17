// components/RecentUpdatesFeed.js
import React from 'react';
import styled from 'styled-components';

const FeedContainer = styled.div`
  /* Styles for feed container */
`;

const UpdateItem = styled.div`
  /* Styles for update item */
  border-bottom: 1px solid #e0e0e0;
  padding: 10px 0;
`;

const UpdateTitle = styled.h3`
  /* Styles for update title */
  margin: 0;
  margin-bottom: 5px;
`;

const UpdateContent = styled.p`
  /* Styles for update content */
  margin: 0;
`;

const RecentUpdatesFeed = ({ updates }) => {
  return (
    <FeedContainer>
      <h2>Recent Updates</h2>
      {updates && updates.map((update, index) => (
        <UpdateItem key={index}>
          <UpdateTitle>{update.title}</UpdateTitle>
          <UpdateContent>{update.content}</UpdateContent>
        </UpdateItem>
      ))}
    </FeedContainer>
  );
};

export default RecentUpdatesFeed;
