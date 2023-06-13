import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const LinkListContainer = styled.section`
  margin-bottom: 12px;
  
  a {
    color: #192841;
    text-decoration: none;

    > div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
      padding: 24px;
      border: 2px solid #192841;
      color: #192841;
      transition: background-color 200ms;

      &:hover {
        background-color: #D1E5F4;
      }

      div.story-info {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-right: 8px;
      }

      div.story-links {
        display: flex;

        a, button {
          background-color: transparent;
          border: none;
          color: #192841;
          font-size: 16px;
          font-weight: 600;
          padding-left: 8px;
          padding-right: 0;
          transition: color 200ms;

          &:hover {
            color: #B47EE5;
            cursor: pointer;
          }
        }
      }
    }
  }
`

const BackLink = styled(Link)`
  color: #192841;
  font-weight: 600;
  text-decoration: none;
  transition: color 200ms;

  &:hover {
    color: #9866C7;
  }
`

export {
  LinkListContainer,
  BackLink
};