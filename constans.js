export const COLORS = {
    primary: '#16162c',
    primaryLight: '#2d2d41',
    secondary: '#00bc48',

    white: '#ffffff',
    lightGray: '#D3D3D3',
    darkGray: '#2e2e42',
}

export const TAB_NAMES = {
    detailsTabName: 'Другое',
    conversationsTabName: 'Мессенджер',
}

export const SCREEN_NAMES = {
    conversationsScreenName: 'Чаты',
    messagesScreenName: 'Сообщения',
}

export const TAB_HIDDEN_SCREEN_NAMES = {
    tabHiddenRoutes: [
        SCREEN_NAMES.messagesScreenName,
    ],
}

const appTheme = { COLORS }

export default appTheme