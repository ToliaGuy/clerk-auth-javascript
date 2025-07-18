import { colorOptionToThemedAlphaScale } from '../utils/colors/scales';

export const whiteAlpha = Object.freeze({
  whiteAlpha25: 'hsla(0, 0%, 100%, 0.02)',
  whiteAlpha50: 'hsla(0, 0%, 100%, 0.03)',
  whiteAlpha100: 'hsla(0, 0%, 100%, 0.07)',
  whiteAlpha150: 'hsla(0, 0%, 100%, 0.11)',
  whiteAlpha200: 'hsla(0, 0%, 100%, 0.15)',
  whiteAlpha300: 'hsla(0, 0%, 100%, 0.28)',
  whiteAlpha400: 'hsla(0, 0%, 100%, 0.41)',
  whiteAlpha500: 'hsla(0, 0%, 100%, 0.53)',
  whiteAlpha600: 'hsla(0, 0%, 100%, 0.62)',
  whiteAlpha700: 'hsla(0, 0%, 100%, 0.73)',
  whiteAlpha750: 'hsla(0, 0%, 100%, 0.78)',
  whiteAlpha800: 'hsla(0, 0%, 100%, 0.81)',
  whiteAlpha850: 'hsla(0, 0%, 100%, 0.84)',
  whiteAlpha900: 'hsla(0, 0%, 100%, 0.87)',
  whiteAlpha950: 'hsla(0, 0%, 100%, 0.92)',
} as const);

export const neutralAlpha = Object.freeze({
  neutralAlpha25: 'hsla(0, 0%, 0%, 0.02)',
  neutralAlpha50: 'hsla(0, 0%, 0%, 0.03)',
  neutralAlpha100: 'hsla(0, 0%, 0%, 0.07)',
  neutralAlpha150: 'hsla(0, 0%, 0%, 0.11)',
  neutralAlpha200: 'hsla(0, 0%, 0%, 0.15)',
  neutralAlpha300: 'hsla(0, 0%, 0%, 0.28)',
  neutralAlpha400: 'hsla(0, 0%, 0%, 0.41)',
  neutralAlpha500: 'hsla(0, 0%, 0%, 0.53)',
  neutralAlpha600: 'hsla(0, 0%, 0%, 0.62)',
  neutralAlpha700: 'hsla(0, 0%, 0%, 0.73)',
  neutralAlpha750: 'hsla(0, 0%, 0%, 0.78)',
  neutralAlpha800: 'hsla(0, 0%, 0%, 0.81)',
  neutralAlpha850: 'hsla(0, 0%, 0%, 0.84)',
  neutralAlpha900: 'hsla(0, 0%, 0%, 0.87)',
  neutralAlpha950: 'hsla(0, 0%, 0%, 0.92)',
} as const);

export const colors = Object.freeze({
  avatarBorder: neutralAlpha.neutralAlpha200,
  avatarBackground: neutralAlpha.neutralAlpha400,
  modalBackdrop: neutralAlpha.neutralAlpha700,
  // Themable colors
  ...neutralAlpha,
  ...whiteAlpha,
  colorBackground: 'white',
  colorInputBackground: 'white',
  colorText: '#212126',
  colorTextSecondary: '#747686',
  colorInputText: '#131316',
  colorTextOnPrimaryBackground: 'white',
  colorShimmer: 'rgba(255, 255, 255, 0.36)',
  transparent: 'transparent',
  white: 'white',
  black: 'black',
  primary50: '#B9BDBC',
  primary100: '#9EA1A2',
  primary200: '#828687',
  primary300: '#66696D',
  primary400: '#4B4D52',
  primary500: '#2F3037',
  primary600: '#2A2930',
  primary700: '#25232A',
  primary800: '#201D23',
  primary900: '#1B171C',
  primaryHover: '#3B3C45', //primary 500 adjusted for lightness
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  ...colorOptionToThemedAlphaScale('#2F3037', 'primaryAlpha')!,
  danger50: '#FEF2F2',
  danger100: '#FEE5E5',
  danger200: '#FECACA',
  danger300: '#FCA5A5',
  danger400: '#F87171',
  danger500: '#EF4444',
  danger600: '#DC2626',
  danger700: '#B91C1C',
  danger800: '#991B1B',
  danger900: '#7F1D1D',
  danger950: '#450A0A',
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  ...colorOptionToThemedAlphaScale('#EF4444', 'dangerAlpha')!,
  warning50: '#FFF6ED',
  warning100: '#FFEBD5',
  warning200: '#FED1AA',
  warning300: '#FDB674',
  warning400: '#F98C49',
  warning500: '#F36B16',
  warning600: '#EA520C',
  warning700: '#C23A0C',
  warning800: '#9A2F12',
  warning900: '#7C2912',
  warning950: '#431207',
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  ...colorOptionToThemedAlphaScale('#F36B16', 'warningAlpha')!,
  success50: '#F0FDF2',
  success100: '#DCFCE2',
  success200: '#BBF7C6',
  success300: '#86EF9B',
  success400: '#4ADE68',
  success500: '#22C543',
  success600: '#16A332',
  success700: '#15802A',
  success800: '#166527',
  success900: '#145323',
  success950: '#052E0F',
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  ...colorOptionToThemedAlphaScale('#22C543', 'successAlpha')!,
} as const);
