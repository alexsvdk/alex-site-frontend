import styled from "styled-components";

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: ${({theme}) => theme.colors.background};
    gap: 40px;
  
    min-height: 100vh;
`

export const StyledLinkWrappersGrid = styled.section`
    width: 900px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 250px 250px;
    gap: 20px;
    @media screen and (max-width: 1200px) {
      grid-template-rows: 200px 200px;
      width: 600px;
      gap: 15px;
    }

    @media screen and (max-width: 640px) {
      grid-template-rows: 140px 140px 140px 140px;
      width: 100%;
      grid-template-columns: 1fr;
      gap: 10px;
    } 

`
