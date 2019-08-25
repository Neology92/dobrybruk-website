import React from 'react';
import styled from 'styled-components';

const Decorations = () => (
  <Wrapper>
    <Arrow w="76px" r="0" o="b" />
    <Arrow w="120px" l="188px" o="b" />
    <Arrow w="70px" l="0" t="290px" o="r" />
    <Square />
  </Wrapper>
);

const Wrapper = styled.div`
  display: none;

  width: 100%;
  height: 0;
  position: relative;
  overflow: visible;

  ${({ theme }) => theme.media.above.l} {
    display: block;
  }
`;

const Arrow = styled.div`
  width: 0;
  height: 0;

  border-top: ${({ w }) => w} solid
    ${({ theme, o }) => (o === 'b' ? theme.color.greyL3 : theme.color.greyL2)};
  border-right: ${({ w }) => w} solid
    ${({ theme, o }) => (o === 'l' ? theme.color.greyL3 : theme.color.greyL2)};
  border-bottom: ${({ w }) => w} solid
    ${({ theme, o }) => (o === 't' ? theme.color.greyL3 : theme.color.greyL2)};
  border-left: ${({ w }) => w} solid
    ${({ theme, o }) => (o === 'r' ? theme.color.greyL3 : theme.color.greyL2)};

  position: absolute;

  ${({ t }) => (t ? `top:${t}` : `top: ${0}`)};
  ${({ r, l }) => (r ? `right:${r}` : `left: ${l}`)};
`;

const Square = styled.div`
  width: 350px;
  height: 250px;
  background: ${({ theme }) => theme.color.greyL3};
  transform: rotate(45deg);

  position: absolute;

  top: -10px;
  left: -110px;

  ::before {
    content: '';
    width: 150px;
    height: 100px;
    transform: rotate(-45deg);

    background: ${({ theme }) => theme.color.green};

    position: absolute;
    top: -40px;
    left: -19px;
  }
`;

export default Decorations;
