import styled from "styled-components";

export const StyledTypography = styled.span`
    display: block;
    font-size: 35px;
    color: ${({theme}) => theme.colors.typography.main};

    @media screen and (max-width: 1200px) {
      font-size: 30px;
    }

    @media screen and (max-width: 640px) {
      font-size: 25px;
    }
`

export const StyledTypographyWrapper = styled.div`
    
    display: flex;
    align-items: center;
    gap: 40px;
    width: 100%;
    padding: 0 60px;

    @media screen and (max-width: 1200px) {
      padding: 0 40px;
      gap: 30px;
    }

    @media screen and (max-width: 640px) {
      gap: 20px;
      padding: 0;
    }

    &:before{
      content: '';
      display: block;
      background-color: ${({theme}) => theme.colors.typography.main};
      height: 1px;
      width: 100%;
    }
  
    &:after{
      content: '';
      display: block;
      background-color: ${({theme}) => theme.colors.typography.main};
      height: 1px;
      width: 100%;
    }
`
