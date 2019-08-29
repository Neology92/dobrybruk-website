import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Button = ({
  to,
  isTransparent,
  isWhite,
  children,
  className,
  isOutsideLink,
  rel,
  target,
}) => {
  return (
    <>
      {isOutsideLink ? (
        <ButtonA
          href={to}
          className={className}
          isTransparent={isTransparent}
          isWhite={isWhite}
          rel={rel}
          target={target}
        >
          {children}
        </ButtonA>
      ) : (
        <ButtonLink
          to={to}
          className={className}
          isTransparent={isTransparent}
          isWhite={isWhite}
          rel={rel}
          target={target}
        >
          {children}
        </ButtonLink>
      )}
    </>
  );
};

const ButtonLink = styled(Link)`
  text-decoration: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 130px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.family.sansation};
  font-weight: 500;
  border-radius: 10px;

  background: ${({ isTransparent, isWhite, theme }) =>
    isTransparent ? 'none' : isWhite ? theme.color.white : theme.color.green};

  border: ${({ isTransparent, theme }) =>
    isTransparent ? `1px solid ${theme.color.black}` : 'none'};

  color: ${({ isTransparent, isWhite, theme }) =>
    isTransparent
      ? theme.color.black
      : isWhite
      ? theme.color.darkGreen
      : theme.color.white};

  ${({ theme }) => theme.media.above.m} {
    background: ${({ isTransparent, isWhite, theme }) =>
      isTransparent
        ? 'none'
        : isWhite
        ? theme.color.greyL2
        : `rgb(${theme.color.rgb.green}, 0.9)`};

    border: ${({ isTransparent, theme }) =>
      isTransparent ? `1px solid ${theme.color.darkGrey}` : 'none'};

    color: ${({ isTransparent, isWhite, theme }) =>
      isTransparent
        ? theme.color.darkGrey
        : isWhite
        ? theme.color.darkGreen
        : theme.color.white};

    transition: background 0.2s ease-in-out, border 0.2s ease-in-out,
      color 0.2s ease-in-out;

    &:hover {
      background: ${({ isTransparent, isWhite, theme }) =>
        isTransparent
          ? 'none'
          : isWhite
          ? theme.color.white
          : theme.color.green};

      border: ${({ isTransparent, theme }) =>
        isTransparent ? `1px solid ${theme.color.darkGreen}` : 'none'};

      color: ${({ isTransparent, isWhite, theme }) =>
        isTransparent
          ? theme.color.darkGreen
          : isWhite
          ? theme.color.darkGreen
          : theme.color.white};
    }
  }

  ${({ theme }) => theme.media.above.l} {
    font-size: 15px;
    border-radius: 8px;
    height: 45px;
    width: 200px;
  }
`;
const ButtonA = styled.a`
  text-decoration: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 130px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.family.sansation};
  font-weight: 500;
  border-radius: 10px;

  background: ${({ isTransparent, isWhite, theme }) =>
    isTransparent ? 'none' : isWhite ? theme.color.white : theme.color.green};

  border: ${({ isTransparent, theme }) =>
    isTransparent ? `1px solid ${theme.color.black}` : 'none'};

  color: ${({ isTransparent, isWhite, theme }) =>
    isTransparent
      ? theme.color.black
      : isWhite
      ? theme.color.darkGreen
      : theme.color.white};

  ${({ theme }) => theme.media.above.m} {
    background: ${({ isTransparent, isWhite, theme }) =>
      isTransparent
        ? 'none'
        : isWhite
        ? theme.color.greyL2
        : `rgb(${theme.color.rgb.green}, 0.9)`};

    border: ${({ isTransparent, theme }) =>
      isTransparent ? `1px solid ${theme.color.darkGrey}` : 'none'};

    color: ${({ isTransparent, isWhite, theme }) =>
      isTransparent
        ? theme.color.darkGrey
        : isWhite
        ? theme.color.darkGreen
        : theme.color.white};

    transition: background 0.2s ease-in-out, border 0.2s ease-in-out,
      color 0.2s ease-in-out;

    &:hover {
      background: ${({ isTransparent, isWhite, theme }) =>
        isTransparent
          ? 'none'
          : isWhite
          ? theme.color.white
          : theme.color.green};

      border: ${({ isTransparent, theme }) =>
        isTransparent ? `1px solid ${theme.color.darkGreen}` : 'none'};

      color: ${({ isTransparent, isWhite, theme }) =>
        isTransparent
          ? theme.color.darkGreen
          : isWhite
          ? theme.color.darkGreen
          : theme.color.white};
    }
  }

  ${({ theme }) => theme.media.above.l} {
    font-size: 15px;
    border-radius: 8px;
    height: 45px;
    width: 200px;
  }
`;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  isTransparent: PropTypes.bool,
  isOutsideLink: PropTypes.bool,
  isWhite: PropTypes.bool,
  className: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.string,
};

Button.defaultProps = {
  to: '/',
  isTransparent: false,
  isOutsideLink: false,
  isWhite: false,
  className: '',
  rel: '',
  target: '',
};

export default Button;
