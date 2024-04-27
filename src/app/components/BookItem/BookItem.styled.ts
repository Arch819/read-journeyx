import styled from '@emotion/styled';

export const BookItemWrapperStyled = styled.div`
  cursor: pointer;
  .img {
    border-radius: 8px;
  }

  .bottom-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    margin-bottom: 2px;
    overflow: hidden;

    font-size: 14px;
    line-height: 1.28;

    color: var(--primary-color);
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .author {
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
    color: var(--secondary-color);
  }
  .btn-delete {
    width: 28px;
    height: 28px;
    border: 1px solid #e8505033;
    border-radius: 100%;
    background: #e850501a;
    transition: color var(--transition);

    &:is(:hover, :focus) {
      border-color: #e85050;
    }
  }

  &.recommended,
  &.library,
  &.dashBoardRecom {
    .text-box {
      max-width: 136px;
    }
  }
  &.library {
    .text-box {
      max-width: 95px;
    }
  }
  &.reading {
    margin-bottom: 20px;
    .img {
      margin-bottom: 10px;
    }
    .title {
      margin-bottom: 4px;
      text-align: center;
      white-space: normal;
    }
  }
  &.dashBoardRecom {
    .text-box {
      max-width: 70px;
    }
    .title {
      font-size: 10px;
      line-height: 1.2;
    }
  }
  &.detail {
    margin-bottom: 20px;
    .img {
      width: 140px;
      height: 214px;
      margin-bottom: 16px;
    }
    .text-box {
      text-align: center;
    }
    .title {
      font-size: 18px;
      line-height: 1;
      white-space: normal;
    }
    .author {
      margin-bottom: 4px;
      font-size: 12px;
      line-height: 1.16;
    }
    .total-page {
      font-size: 10px;
      font-weight: 500;
      line-height: 1.2%;
      color: var(--primary-color);
    }
  }

  @media screen and (min-width: 768px) {
    &.reading,
    &.detail {
      .author {
        font-size: 14px;
        line-height: 1.28;
      }
      .title {
        font-size: 20px;
      }
    }

    &.reading {
      margin-bottom: 16px;
      .img {
        margin-bottom: 25px;
      }
      .title {
        line-height: 1;
      }
    }
    &.detail {
      margin-bottom: 32px;
      .img {
        width: 154px;
        height: 234px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    &.reading {
      margin-bottom: 24px;
    }
  }
`;
