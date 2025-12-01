const initState = {
    themeId: 1,
}

type ThemeState = typeof initState

type ChangeThemeAT = {
    type: 'SET_THEME_ID',
    id: number
}

export const themeReducer = (state: ThemeState = initState, action: ChangeThemeAT ): ThemeState => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeAT => ({ type: 'SET_THEME_ID', id }) // fix any
