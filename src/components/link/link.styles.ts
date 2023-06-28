import styled from "styled-components";

export const StyledLinkWrapper = styled.a`
    width: 100%;
    border: 1px solid ${({theme}) => theme.colors.typography.main};
    border-radius: 14px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
  
    &:hover,&:visited,&:link {
      color: inherit;
    }

    &:hover {
        filter: none;
        cursor: auto;
    }
  
    @media (hover: hover) {
      &:hover {
        filter: brightness(150%);
        cursor: pointer;
      }
    }
`

export const StyledLinkWrapperDecoration = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    position: absolute;
    background-color: ${({theme }) => theme.colors.typography.main};
    color: ${({theme}) => theme.colors.background};
    padding: 15px 5px;
    left: 0;
    top: 0;
    bottom: 0;
`

export const StyledLinkWrapperDecorationPoint = styled.div`
    background-color: ${({theme }) => theme.colors.background};
    width: 11px;
    height: 11px;
    border-radius: 50%;
`

export const StyledLinkWrapperDecorationPoint2 = styled(StyledLinkWrapperDecorationPoint)`
    background-color: transparent;
    border: 1px solid ${({theme }) => theme.colors.background};
    width: 9px;
    height: 9px;
`

export const StyledLinkWrapperDecorationPoint3 = styled(StyledLinkWrapperDecorationPoint)`
    background-color: transparent;
    border: 1px solid ${({theme }) => theme.colors.background};
    width: 7px;
    height: 7px;
`

export const StyledLinkWrapperImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
