import styled from 'styled-components';
import theme from '../../styles/theme';
import { UpSmallIcon, DownBigIcon, DownSmallIcon } from '../../assets';

export const PercentButton = ({ isUp, isSmall, value }) => {
  return (
    <St.PercentButton $isUp={isUp} $isSmall={isSmall}>
      {/* isUp==true && isSmall==false 인 경우는 없음 */}
      {isUp && isSmall && <img src={UpSmallIcon} alt="작은-업-화살표" />}
      {!isUp && isSmall && <img src={DownSmallIcon} alt="작은-다운-화살표" />}
      {!isUp && !isSmall && <img src={DownBigIcon} alt="큰-다운-화살표" />}
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
    gap: 0.4rem;

    width: auto;

    padding: 0.4rem 1rem;

    border-radius: ${({ $isSmall }) => ($isSmall ? '0.5rem' : '0.8rem')};

    ${({ $isSmall }) => ($isSmall ? theme.fonts.productsans_14 : theme.fonts.productsans_18_bold)};
    background-color: ${({ $isUp }) => ($isUp ? theme.colors.red_background : theme.colors.blue_background)};
    color: ${({ $isUp }) => ($isUp ? theme.colors.red_main : theme.colors.blue_main)};

    img {
      margin: auto 0;
    }
  `,
};
