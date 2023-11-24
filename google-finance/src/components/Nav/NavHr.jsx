import styled from 'styled-components';

const NavHr = styled.hr`
  position: relative;
  left: -1.5rem;
  margin: 0;
  width: 25rem;
  border: none;
  border-top: 0.05rem solid ${(props) => props.theme.colors.gray_3};
  margin-bottom: ${(props) => props.marginBottom};
`;

export default NavHr;
