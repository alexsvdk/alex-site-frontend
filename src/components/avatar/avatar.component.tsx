import React from "react";
import {StyledImage, StyledWrapper} from "./avatar.style.ts";

interface AvatarProps {
    imageSrc: string;
}

export const Avatar: React.FC<AvatarProps> = ({imageSrc}) => {
    return (
        <StyledWrapper>
            <StyledImage src={imageSrc} alt={'аватар'} />
        </StyledWrapper>
    )
}
