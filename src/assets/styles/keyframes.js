import { keyframes } from 'styled-components';

export const lazyLoad = keyframes`

    0% {
        opacity: 0;

    }
        100% {
            opacity: 1;
        }

`;

export const pulsate = keyframes`
    0% {
  
      transform: scale(0.1, 0.1);
      opacity: 0;
      filter: alpha(opacity=0);
    }

    50% {
      opacity: 1;
      filter: none;
    }

    100% {
  
      opacity: 0;
      filter: alpha(opacity=0);
    }
  `;
