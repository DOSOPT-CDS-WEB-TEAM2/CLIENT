import styled from 'styled-components';
import theme from '../../styles/theme';

const St = {
  CommonButtonContainer: styled.div`
    display: flex;
    align-items: center;

    gap: 1rem;
  `,
  CommonButton: styled.button`
    height: 3rem;
    padding: 0.8rem 1.4rem;
    gap: 1rem;

    border-radius: 1.5rem;
    ${theme.fonts.roboto_12_cond};
    background-color: ${theme.colors.gray_4};
    color: ${theme.colors.gray_2};
    border: none;

    &:active,
    &:focus {
      background-color: ${theme.colors.blue_background};
      color: ${theme.colors.blue_main};
    }
  `,
};

export { St };
