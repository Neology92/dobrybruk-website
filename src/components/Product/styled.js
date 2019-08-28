import styled from 'styled-components';
import Icon from '../Icon/Icon';

export const StyledIcon = styled(Icon)`
  & > svg {
    height: 72px;

    ${({ theme }) => theme.media.above.s} {
      height: 77px;
    }

    ${({ theme }) => theme.media.above.m} {
      height: 80px;
    }

    ${({ theme }) => theme.media.above.l} {
      height: 90px;
    }

    ${({ theme }) => theme.media.above.xl} {
      height: 95px;
    }

    ${({ theme }) => theme.media.above.xxl} {
      height: 110px;
    }
  }
`;
