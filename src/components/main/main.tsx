import React, {memo, useCallback} from "react";
import {StyledLinkWrappersGrid, StyledWrapper} from "./main.styled.ts";
import {Avatar} from "../avatar/avatar.component.tsx";
import avatarImage from '../../images/avatar.jpg';
import {StyledTypography, StyledTypographyWrapper} from "../typography/typography.tsx";
import {Link} from "../link/link.component.tsx";
import {useTheme} from "styled-components";
import { ReactComponent as VkLogo } from "../../images/links/vk-logo.svg";
import { ReactComponent as InstagramLogo } from "../../images/links/instagram-logo.svg";
import { ReactComponent as TelegramLogo } from "../../images/links/telegram-logo.svg";
import { ReactComponent as YandexMusicLogo } from "../../images/links/yandex-music-logo.svg";
import instagramImage from "../../images/links/instagram-link-wrapper.jpg";
import vkImage from "../../images/links/vk-link-wrapper.jpg";
import telegramImage from "../../images/links/telegram-link-wapper.jpg";
import yandexMusicImage from "../../images/links/yandex-music-link-wrapper.jpg";

export const Main: React.FC = memo(() => {

    const theme = useTheme();

    const renderVkIcon = useCallback(() => {
        return <VkLogo fill={theme.colors.background} width={30} height={30}/>
    }, [theme]);

    const renderInstagramIcon = useCallback(() => {
        return <InstagramLogo fill={theme.colors.background} width={30} height={30}/>
    }, [theme]);

    const renderTelegramIcon = useCallback(() => {
        return <TelegramLogo fill={theme.colors.background} width={30} height={30}/>
    }, [theme]);

    const renderYandexMusicIcon = useCallback(() => {
        return <YandexMusicLogo fill={theme.colors.background} width={30} height={30}/>
    }, [theme]);

    return (
        <StyledWrapper>
            <Avatar imageSrc={avatarImage}/>
            <StyledTypographyWrapper>
                <StyledTypography>
                    Стереоветер
                </StyledTypography>
            </StyledTypographyWrapper>
            <StyledLinkWrappersGrid>
                <Link url={'https://vk.com/stereobreeze'} renderIcon={renderVkIcon} imageSource={vkImage}/>
                <Link url={'https://www.instagram.com/stereo.breeze/'} renderIcon={renderInstagramIcon} imageSource={instagramImage}/>
                <Link url={'https://t.me/a1ex5'} renderIcon={renderTelegramIcon} imageSource={telegramImage}/>
                <Link url={'https://music.yandex.ru/artist/16746600'} renderIcon={renderYandexMusicIcon} imageSource={yandexMusicImage}/>
            </StyledLinkWrappersGrid>
        </StyledWrapper>

    )
});
