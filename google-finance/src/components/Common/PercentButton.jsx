import styled from 'styled-components';
import theme from '../../styles/theme';
import { UpSmallIcon } from '../../assets';

export const PercentButton = ({ value }) => {
  return (
    <St.PercentButton>
      <img src={UpSmallIcon} />
      <span>{value}</span>
    </St.PercentButton>
  );
};

export const PercentButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const St = {
  PercentButton: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: auto;
    height: 2.5rem;
    padding: 0.4rem 1rem;

    border-radius: 0.5rem;
    ${theme.fonts.productsans_14_bold};
    background-color: ${theme.colors.red_background};
    color: ${theme.colors.red_main};
  `,
};
