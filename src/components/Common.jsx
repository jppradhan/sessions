import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from 'styled-bootstrap-components';

export const CustomLink = styled(Link)`
  font-size: inherit;
  color: #007bff;
  text-decoration: none;
  padding: 10px;
`;

export const SpacedContainer = styled(Container)`
  padding: 20px;
`;
