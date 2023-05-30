import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const LinkListContainer = styled.section`
  margin-bottom: 12px;
  
  a {
    color: #192841;
    text-decoration: none;

    div {
      margin-bottom: 24px;
      padding: 24px;
      border: 2px solid #192841;
      color: #192841;
      transition: background-color 200ms;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &:hover {
        background-color: #D1E5F4;
      }
    }
  }
`

const BackLink = styled(Link)`
  color: #192841;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: #4B0076;
  }
`

export {
  LinkListContainer,
  BackLink
};