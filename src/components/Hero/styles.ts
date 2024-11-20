import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 80px;
  padding: 72px 0;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    row-gap: 40px;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 100%;
  }

  .title {
    font-size: 52px;
    font-weight: 700;
    line-height: 110%x;
    letter-spacing: -1px;
    margin-bottom: 24px;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 32px;
      text-align: center;
    }
  }

  .text {
    margin-bottom: 40px;

    @media (max-width: ${breakpoints.desktop}) {
      margin: 0 auto;
      max-width: 100%;
      text-align: justify;
    }
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    width: 445px;
    column-gap: 20px;

    .button-text {
      font-size: 14px;
      line-height: 20px;
    }

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 100%;
      align-items: center;
      flex-direction: column;
      margin: 0 auto;

      .button-text {
        text-align: center;
        max-width: 200px;
        font-size: 12px;
      }
    }
  }
`

export const Button = styled.button`
  width: 208px;
  padding: 12px 0;
  background-color: ${colors.text};
  color: ${colors.white};
  border: none;
  cursor: pointer;
`

export const Image = styled.img`
  width: 100%;
`
