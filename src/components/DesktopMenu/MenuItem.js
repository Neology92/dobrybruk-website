import styled from 'styled-components';

const MenuItem = styled.li`
  list-style: none;
  color: rgb(${({ theme }) => theme.color.rgb.white}, 0.5);
  font-size: 17px;
  margin: auto 18px;

  &:hover {
    color: rgb(${({ theme }) => theme.color.rgb.white}, 1);
  }
`;

export default MenuItem;
