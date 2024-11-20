import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.section`
  background-color: ${colors.whiteGray};
  padding: 72px 0;

  .main-container {
    display: flex;
    flex-direction: column;
    row-gap: 80px;
    max-width: 1040px;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      row-gap: 48px;
    }
  }

  .title {
    font-size: 40px;
    font-weight: 700;
    line-height: 120%;
    text-align: center;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 32px;
    }
  }

  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 48px;
    list-style: none;

    @media (max-width: ${breakpoints.desktop}) {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 48px;
    }
  }
`

export const ItemCard = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 24px;

  .item-image {
    width: 48px;
    height: 48px;
    object-fit: cover;
  }

  .item-title {
    font-size: 24px;
    font-weight: 700;
    line-height: 140%;
  }

  .item-text {
    text-align: center;
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin: 0 auto;
    max-width: 80%;

    .item-title {
      font-size: 18px;
    }

    .item-image {
      width: 32px;
      height: 32px;
    }
  }
`
