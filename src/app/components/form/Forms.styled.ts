import styled from '@emotion/styled';

export const FormWrapperStyled = styled.div`
  padding: 20px 20px 40px;
  @media screen and (min-width: 768px) {
    padding: 36px 167px 0px 64px;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px 64px;
  }
`;

export const FormTitleStyled = styled.h2`
  margin-top: 40px;
  margin-bottom: 20px;

  font-size: 32px;
  font-weight: 700;
  line-height: 1;

  .second {
    color: #e3e3e380;
  }

  @media screen and (min-width: 768px) {
    margin-top: 157px;
    margin-bottom: 40px;

    font-size: 64px;
    line-height: 0.9;
    .second {
      display: block;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-top: 107px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 82px;
  }
`;

export const InputBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const FormActionBoxStyled = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
`;

export const FormActionSubmitBtnStyled = styled.button`
  padding: 12px 29px;
  border-color: transparent;
  border-radius: 30px;
  background: #f9f9f9;

  font-size: 14px;
  font-weight: 700;
  line-height: 1.28;
  transition:
    background var(--transition),
    border var(--transition),
    color var(--transition);

  &:not(:disabled):is(:hover, :focus) {
    background: transparent;
    border-color: #f9f9f933;
    color: var(--primary-color);
  }
  &:disabled {
    cursor: no-drop;
  }

  @media screen and (max-width: 767px) {
    &.sign-in {
      padding: 12px 45px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 16px 54px;
    margin-right: 20px;

    font-size: 20px;
    line-height: 1;
  }
`;
export const FormActionLinkStyled = styled.a`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.16;
  letter-spacing: -0.3px;
  white-space: nowrap;

  color: #686868;
  text-decoration: underline;
  transition: color var(--transition);

  &:is(:hover, :focus) {
    color: var(--primary-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;
