import styled from 'styled-components';

const NavHr = styled.hr`
  position: relative;

  width: 25rem;
  left: ${(props) => props.left};
  margin: 0;

  border: none;
  border-top: 0.05rem solid ${(props) => props.theme.colors.gray_3};
  margin-bottom: ${(props) => props.marginBottom};
`;

export default NavHr;
