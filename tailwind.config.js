/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      mainBgColor: {
        light: '#eef0f2',
        dark: '#252730',
      },
      subBgColor: {
        light: '#ffffff',
        dark: '#2f343c',
      },
      blockBgColor: {
        light: '#ffffff',
        dark: '#141617',
      },
      mainTextColor: {
        light: '#1a1a1a',
        dark: '#e4e4e7',
      },
      subTextColor: {
        light: '#71717a',
        dark: '#676d7c',
      },
      white: '#ffffff',
      blue: '#1c56cb',
      deepBlue: '#1849ac',
      linkBlue: '#4ca5ff',
      purple: '#6961cc',
      deepPurple: '#312c4f',
      pink: '#d786bf',
      yellow: '#f7cf81',
      green: '#6faa5b',
      red: '#eb5757',
      gradientBlue: '#4ca5ff',
      gradientPurple: '#b673f8',
      socialNaver: '#00C73C',
      socialGoogle: '#4285F4',
      socialGitHub: '#181c21',
      socialKakao: '#ffe812',
      icon: {
        blueBg: '#b7d9fc',
        blueText: '#064d96',
        pinkBg: '#fdc9ee',
        pinkText: '#b942bd',
      },
      gray: {
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3a3d45',
        800: '#27272a',
        900: '#18181b',
      },
    },
  },
  plugins: [],
};
