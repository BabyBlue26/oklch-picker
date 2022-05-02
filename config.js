//   COLOR_FN: 'lch'
//   L_MAX: 100
//   C_MAX: 140
//   C_STEP: 1
//   C_RANDOM: 39

let config = {
  COLOR_FN: '"oklch"',

  L_MAX: 1,
  L_STEP: 5,

  C_MAX: 0.4,
  C_STEP: 0.01,
  C_RANDOM: 0.1,

  H_MAX: 360,
  H_STEP: 0.5,

  ALPHA_MAX: 100,
  ALPHA_STEP: 10,

  P3_ALPHA: 0.5
}

if (process.env.LCH) {
  config = {
    ...config,
    COLOR_FN: '"lch"',
    L_MAX: 100,
    C_MAX: 140,
    C_STEP: 1,
    C_RANDOM: 39
  }
}

export default config
