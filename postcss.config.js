module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    purgecss({
      content: ['./**/*.html']
    })
  ]
}
const purgecss = require('@fullhuman/postcss-purgecss')
postcss([
  purgecss({
    content: ['./src/**/*.html']
  })
])
