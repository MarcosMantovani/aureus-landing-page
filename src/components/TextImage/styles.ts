import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.section`
  background-color: ${colors.whiteGray};
  padding: 72px 0;

  .main-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 80px;

    @media (max-width: ${breakpoints.desktop}) {
      flex-direction: column;
    }
  }
`

export const Text = styled.div`
  .title {
    font-size: 48px;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 24px;
  }

  .list {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    padding-left: 20px;
    padding-bottom: 40px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;

    .title {
      font-size: 32px;
    }
  }
`

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${colors.text};
  color: ${colors.text};
  line-height: 150%;
  padding: 12px 24px;
  cursor: pointer;
`

export const Image = styled.img`
  width: 100%;
`
