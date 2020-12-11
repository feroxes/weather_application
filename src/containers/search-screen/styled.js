import styled from 'styled-components';
import { Colors } from '../../assets/styles/Variables.js';

export const SearchScreenWrapper = styled.div`
  z-index: 3;
  padding: 40px;
  color: ${Colors.white};
`;

export const SearchScreenHeaderStyled = styled.h2`
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 10px;
`;

export const SearchFieldStyled = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 20px;
  border-radius: 30px;
  border: 1px solid ${Colors.white};
  background-color: transparent;
  color: ${Colors.white};
  outline: none;
  font-size: 16px;
  font-weight: 300;
  text-transform: capitalize;
  &::placeholder {
    color: ${Colors.white};
    opacity: 1;
  }
`;

export const AutocompleteDropdownStyled = styled.div`
  width: 100%;
  padding: 10px 0;
  font-size: 18px;
  font-weight: 300;
`;

export const AutocompleteItemStyled = styled.div`
  padding: 7px 10px;
  &:hover {
    border-radius: 5px;
    background-color: #fafafa;
    opacity: 0.2;
    color: #39346a;
  }
`;

export const PoweredStyled = styled.a`
  position: absolute;
  color: ${Colors.white};
  z-index: 410;
  bottom: 25px;
  font-size: 10px;
  left: 50%;
  transform: translate(-50%);
`;
