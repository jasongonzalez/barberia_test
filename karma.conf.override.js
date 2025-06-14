module.exports = function(config) {
  config.set({
    browsers: ['Edge'],
    plugins: [require('karma-edge-launcher')]
  });
};