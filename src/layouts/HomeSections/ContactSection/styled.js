import styled from 'styled-components';

import { Icon, Button } from 'components';

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

  ${({ theme }) => theme.media.above.m} {
    padding: 0 15vw 0 0;
    font-size: 2.3rem;

    width: 200px;
    text-align: left;
  }

  ${({ theme }) => theme.media.above.xl} {
    padding: 0 20vw 0 0;
    font-size: 2.5rem;
  }

  ${({ theme }) => theme.media.above.xxl} {
    padding: 0 25vw 0 0;
  }
`;

const StyledIcon = styled(Icon)`
  padding: 3px 10px 0 0;
`;

const StyledButton = styled(Button)`
  ${({ theme }) => theme.media.above.m} {
    display: none;
  }
`;

export { StyledA, StyledIcon, StyledButton };
