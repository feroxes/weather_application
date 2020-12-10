import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover;
  position: relative;
  background: ${props => props.theme.backgroundWrapper};
`;
