import styled from '@emotion/styled';

export const AuthCornerBoxStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const AuthInfoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AuthAvatarStyled = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f9f9f933;
  border-radius: 100%;
  .avatar-text {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;

    .avatar-text {
      line-height: 1.12;
    }
  }
`;

export const AuthNameStyled = styled.p`
  display: none;
  @media screen and (min-width: 1440px) {
    display: inline-flex;
  }
`;
