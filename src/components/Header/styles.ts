import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.header`
  border-bottom: 1px solid ${colors.text};

  .main-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0;
  }

  .logo {
    width: 100%;
    max-width: 32px;
    height: 100%;
    max-height: 32px;
  }

  .links {
    display: flex;
    align-items: center;
    column-gap: 32px;

    .link {
      font-size: 16px;
      line-height: 150%;
      color: ${colors.text};
    }

    .contact {
      color: ${colors.white};
      background-color: ${colors.text};
      padding: 8px 20px;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    .links {
      column-gap: 8px;

      .link {
        font-size: 12px;
      }
    }
  }
`
