import styled from 'styled-components'
import { colors, breakpoints } from '../../styles'

export const Container = styled.section`
  background-color: ${colors.gray};
  padding: 112px 0;

  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-size: 48px;
    line-height: 120%;
    font-weight: 700;
    margin-bottom: 24px;
  }

  .subtitle {
    margin-bottom: 40px;
  }

  .subtitle,
  .title {
    text-align: center;
    color: ${colors.white};
  }

  @media (max-width: ${breakpoints.desktop}) {
    .title {
      font-size: 32px;
    }

    .subtitle {
      font-size: 14px;
    }
  }
`

export const Button = styled.button`
  background-color: ${colors.text};
  color: ${colors.white};
  padding: 12px 74px;
  border: none;
  cursor: pointer;
`
