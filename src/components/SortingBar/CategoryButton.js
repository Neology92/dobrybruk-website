import styled from 'styled-components';

const CategoryButton = styled.button`
  background: none;
  border: none;

  position: relative;

  margin: 9px 0;
  padding: 0;

  color: ${({ theme }) => theme.color.darkGrey};

  font-size: 2.2rem;
  font-weight: 500;

  ${({ theme }) => theme.media.above.m} {
    margin: 0 20px;
  }

  ${({ theme }) => theme.media.above.l} {
    margin: 0 20px 0 5px;
  }

  ${({ theme }) => theme.media.above.xl} {
    margin: 0 25px 0 5px;
  }

  ${({ theme }) => theme.media.above.xxxl} {
    margin: 0 45px 0 5px;
  }

  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translate3d(0, -1px, 0);
    &::after {
      transform: translate3d(0, 1px, 0);
    }
  }

  &::after {
    content: '';
    width: calc(100% - 6px);
    height: 4px;

    background: ${({ isActive, theme }) =>
      isActive ? theme.color.darkGrey : theme.color.greyL2};

    position: absolute;
    top: -36px;
    left: 3px;

    transition: transform 0.3s ease-in-out;
  }
`;

export default CategoryButton;
