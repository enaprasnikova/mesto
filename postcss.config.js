const autoprefixer = require('autoprefixer');
const cssnanno = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer,
    cssnanno({ preset: 'default'})
  ]
}