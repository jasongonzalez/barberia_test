module.exports = function (config) {
  config.set({
    // ...
    browsers: ['Edge'],  // Cambia a Edge (o 'EdgeHeadless' para modo sin interfaz)
    plugins: [
      require('karma-jasmine'),
      require('karma-edge-launcher'),  // Añade el plugin de Edge
      // ¡Elimina o comenta 'karma-chrome-launcher' si aparece aquí!
    ],
    customLaunchers: {  // Opcional: Configuración para Edge Headless
      EdgeHeadless: {
        base: 'Edge',
        flags: ['--headless', '--disable-gpu']
      }
    }
  });
};