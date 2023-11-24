import styled from 'styled-components';
import theme from '../../styles/theme';

export const CommonButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CommonButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ $hasOneIcon }) => ($hasOneIcon ? '3rem' : 'auto')};
  height: 3rem;
  padding: ${({ $hasOneIcon }) => ($hasOneIcon ? '0' : '0.8rem 1.4rem')};

  gap: 0.4rem;
  border-radius: ${({ $hasOneIcon }) => ($hasOneIcon ? '50%' : '1.5rem')};
  ${theme.fonts.roboto_12_cond};
  background-color: ${theme.colors.gray_4};
  color: ${theme.colors.gray_2};
  border: none;

  &:active,
  &:focus {
    background-color: ${theme.colors.blue_background};
    color: ${theme.colors.blue_main};
  }
`;

CommonButton.defaultProps = {
  $hasOneIcon: false,
};
