import styled from 'styled-components';

import colors from '../../styles/colors';

export const AreaButtonFilterTools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AreaTools = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${colors.dark.veryDarkDesaturatedBlue};

  padding: 16px 24px;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;