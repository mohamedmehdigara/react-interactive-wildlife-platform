// components/FilterBar.js
import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  /* Styles for filter container */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const FilterLabel = styled.span`
  /* Styles for filter label */
  margin-right: 10px;
`;

const FilterSelect = styled.select`
  /* Styles for filter select */
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const FilterOption = styled.option`
  /* Styles for filter option */
`;

const FilterBar = ({ regions, species, statuses, onFilterChange }) => {
  return (
    <FilterContainer>
      <FilterLabel>Filter by:</FilterLabel>
      {/* Region filter */}
      <FilterSelect onChange={(e) => onFilterChange('region', e.target.value)}>
        <FilterOption value="">All Regions</FilterOption>
        {regions && regions.map(region => (
          <FilterOption key={region} value={region}>{region}</FilterOption>
        ))}
      </FilterSelect>
      {/* Species filter */}
      <FilterSelect onChange={(e) => onFilterChange('species', e.target.value)}>
        <FilterOption value="">All Species</FilterOption>
        {species && species.map(species => (
          <FilterOption key={species} value={species}>{species}</FilterOption>
        ))}
      </FilterSelect>
      {/* Status filter */}
      <FilterSelect onChange={(e) => onFilterChange('status', e.target.value)}>
        <FilterOption value="">All Statuses</FilterOption>
        {statuses && statuses.map(status => (
          <FilterOption key={status} value={status}>{status}</FilterOption>
        ))}
      </FilterSelect>
    </FilterContainer>
  );
};

export default FilterBar;
