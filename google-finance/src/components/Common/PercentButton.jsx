import styled from 'styled-components';
import theme from '../../styles/theme';
import { UpSmallIcon, DownBigIcon, DownSmallIcon } from '../../assets';

export const PercentButton = ({ isUp, isSmall, value }) => {
  return (
    <St.PercentButton>
      {/* isUp==true && isSmall==false 인 경우는 없음 */}
      {isUp == true && isSmall == true && <img src={UpSmallIcon} />}
      {isUp == false && isSmall == true && <img src={DownSmallIcon} />}
      {isUp == false && isSmall == false && <img src={DownBigIcon} />}
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
    gap: 0.3rem;

    width: auto;

    padding: 0.4rem 1rem;

    border-radius: 0.5rem;
    font-size: 0.5rem;
    ${theme.fonts.productsans_14};
    background-color: ${({ isUp }) => (isUp ? theme.colors.red_background : theme.colors.blue_background)};
    color: ${({ isUp }) => (isUp ? theme.colors.red_main : theme.colors.blue_main)};

    img {
      margin: auto 0;
    }
  `,
};
