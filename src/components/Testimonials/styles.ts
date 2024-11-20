import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 80px;
  padding: 72px 0;

  .title {
    font-size: 48px;
    font-weight: 700;
    line-height: 120%;
    text-align: center;
    margin-bottom: 24px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    row-gap: 48px;

    .title {
      font-size: 32px;
      margin-bottom: 8px;
    }

    .subtitle {
      font-size: 14px;
    }
  }
`

export const RatingList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 48px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const RatingItem = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  .rating-stars {
    width: 116px;
    height: 19px;
    object-fit: cover;
  }

  .rating-text {
    font-size: 20px;
    line-height: 140%;
    font-weight: 700;
    flex-grow: 1;
  }

  .rating-author {
    display: flex;
    flex-direction: column;

    .rating-author-image {
      width: 56px;
      height: 56px;
      object-fit: cover;
      border-radius: 50%;
      object-position: center;
      margin-bottom: 16px;
    }

    .rating-author-info {
      display: flex;
      flex-direction: column;

      .rating-author-name {
        font-weight: 700;
      }

      .rating-author-role,
      .rating-author-name {
        font-size: 16px;
        line-height: 150%;
      }
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    row-gap: 16px;
    margin-bottom: 32px;

    .rating-text {
      font-size: 14px;
    }

    .rating-author {
      flex-direction: row;
      align-items: center;
      margin-bottom: 24px;

      .rating-author-image {
        max-width: 24px;
        max-height: 24px;
        margin-bottom: 0;
      }

      .rating-author-info {
        margin-left: 8px;

        .rating-author-name {
          font-size: 14px;
        }

        .rating-author-role {
          font-size: 12px;
        }
      }
    }
  }
`
