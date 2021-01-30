export type AppTheme = {
    colors: {
        text: {
            [key: string]: string
        },
        backgrounds: {
            [key: string]: string
        }
    },
    dropShadows: string
}

export const theme: AppTheme = {
    colors: {
        text: {
            defaultBright: 'rgba(255,255,255,0.87)',
            defaultMedium: 'rgba(255,255,255,0.65)',
            defaultDull: 'rgba(255,255,255,0.38)',
            primary: 'rgba(103,170,203,1)'
        },
        backgrounds: {
            defaultLight: 'rgba(45,45,62,1)',
            defaultDark: 'rgba(7,7,10,1)'
        }
    },
    dropShadows: '-webkit-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);\n' +
        '-moz-box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);\n' +
        'box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);'
}
