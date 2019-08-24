import styled from 'styled-components';

import { Icon } from 'components';

const StyledA = styled.a`
  padding: 8px 0 0 38px;

  color: ${({ theme }) => theme.color.green};
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;

  text-decoration: underline;
  cursor: pointer;

  & :hover {
    color: ${({ theme }) => theme.color.darkGreen};
  }
`;

const StyledIcon = styled(Icon)`
  padding: 3px 10px 0 0;
`;

export { StyledA, StyledIcon };
