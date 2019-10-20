import styled from 'styled-components';

const SectionWrapper = styled.section`
  width: 100%;
  min-height: 100px;
  padding: 0 0 25px 0;

  max-width: 100%;

  background: ${({ theme }) => theme.color.darkGreen};
  position: relative;

  ${({ theme }) => theme.media.above.m} {
    min-height: 150px;
  }

  ${({ theme }) => theme.media.above.l} {
    min-height: 170px;
  }

  ${({ theme }) => theme.media.above.xl} {
    min-height: 190px;
  }
`;

export default SectionWrapper;
