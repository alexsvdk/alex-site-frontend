import styled from "styled-components";

export const StyledWrapper = styled.div`
    border-radius: 50%;
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: 1px solid ${({theme}) => theme.colors.typography.main};
  
    @media screen and (max-width: 1200px) {
      width: 200px;
      height: 200px;
    }

    @media screen and (max-width: 640px) {
      width: 150px;
      height: 150px;
    }
`

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`
