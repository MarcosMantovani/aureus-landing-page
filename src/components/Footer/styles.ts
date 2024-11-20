import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.footer`
  padding: 80px 0;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 40px 0;
  }
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 32px;

  .links {
    display: flex;
    column-gap: 16px;

    .link {
      font-size: 14px;
      line-height: 150%;
      color: ${colors.text};
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding-bottom: 16px;

    .links {
      column-gap: 12px;

      .link {
        font-size: 12px;
      }
    }
  }
`

export const Logo = styled.img`
  width: 100%;
  max-width: 64px;
  height: 100%;
  max-height: 64px;
  object-fit: cover;
  pointer-events: none;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 32px;
    max-height: 32px;
  }
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 32px;
  border-top: 1px solid ${colors.text};

  .left {
    display: flex;
    column-gap: 24px;
    font-size: 14px;
    line-height: 150%;

    .link {
      color: ${colors.text};
      text-decoration: underline;
    }
  }

  .right {
    display: flex;
    column-gap: 12px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    align-items: center;
    row-gap: 32px;
    padding-top: 16px;

    .left {
      text-align: center;
      flex-direction: column;
      row-gap: 16px;

      .link,
      .copyright {
        font-size: 12px;
      }
    }
  }
`
