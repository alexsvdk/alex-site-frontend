import React, {memo, ReactElement} from "react";
import {
    StyledLinkWrapper,
    StyledLinkWrapperDecoration,
    StyledLinkWrapperDecorationPoint,
    StyledLinkWrapperDecorationPoint2,
    StyledLinkWrapperDecorationPoint3,
    StyledLinkWrapperImage
} from "./link.styles.ts";

interface LinkProps {
    url: string;
    renderIcon: () => ReactElement;
    imageSource: string;
}

export const Link: React.FC<LinkProps> = memo(({url, renderIcon, imageSource}) => {
    return (
        <StyledLinkWrapper href={url} target={'_blank'}>
            <StyledLinkWrapperDecoration>
                <div>
                    {renderIcon()}
                </div>
                <StyledLinkWrapperDecorationPoint/>
                <StyledLinkWrapperDecorationPoint2/>
                <StyledLinkWrapperDecorationPoint3/>
            </StyledLinkWrapperDecoration>
            <StyledLinkWrapperImage src={imageSource} />
        </StyledLinkWrapper>
    )
});
