import styled from 'styled-components';
import theme from '../../styles/theme';

export const CommonButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: ${({ $isSub }) => !$isSub && 'wrap'};

  gap: 1rem;

  white-space: ${({ $isSub }) => $isSub && 'nowrap'};
  overflow-x: ${({ $isSub }) => $isSub && 'scroll'};
  overflow-y: ${({ $isSub }) => $isSub && 'hidden'};
  /* IE and Edge */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;
  /* Chrome , Safari , Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CommonRateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 7.7rem;
  height: 2.5rem;
  padding: 0.4rem 1rem;

  border-radius: ${({ $hasOneIcon }) => ($hasOneIcon ? '50%' : '0.5rem')};
  ${theme.fonts.productsans_14_bold};
  background-color: ${theme.colors.red_background};
  color: ${theme.colors.red_main};
  border: none;

  img {
    margin: 0;
  }
`;

export const CommonButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ $hasOneIcon }) => ($hasOneIcon ? '3rem' : 'auto')};
  height: 3rem;
  padding: ${({ $hasOneIcon }) => ($hasOneIcon ? '0' : '0.8rem 1.2rem')};

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
