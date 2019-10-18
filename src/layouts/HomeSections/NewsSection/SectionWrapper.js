import styled from 'styled-components';

const SectionWrapper = styled.section`
  width: 100%;
  min-height: 135px;

  max-width: 100%;

  background: ${({ theme }) => theme.color.darkGreen};
  position: relative;

  ${({ theme }) => theme.media.above.m} {
    min-height: 180px;
  }

  ${({ theme }) => theme.media.above.l} {
    min-height: 200px;
  }

  ${({ theme }) => theme.media.above.xl} {
    min-height: 220px;
  }
`;

export default SectionWrapper;
