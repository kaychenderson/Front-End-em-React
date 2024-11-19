const path = require('path'); // ! biblioteca para trabalhar com diretórios

module.exports = {
  entry: './js/index.js', // ! arquivo de entrada do js
  output: {
    filename: 'bundle.js', // ! arquivo de saída do js
    path: path.resolve(__dirname, 'dist'),
  },
};
