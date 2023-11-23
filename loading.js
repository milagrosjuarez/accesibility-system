document.getElementById("analyzeButton").addEventListener("click", function () {
  var loader = document.getElementById("loader");

  // Mostrar el símbolo de carga
  loader.style.display = "block";

  // Simular un tiempo de carga (puedes reemplazar esto con tu lógica real de carga)
  setTimeout(function () {
      console.log("Carga completada"); // Agrega un mensaje de registro para verificar si se ejecuta
      // Ocultar el símbolo de carga después del tiempo de carga simulado
      loader.style.display = "none";
  }, 8000); // Simulación de carga durante 8 segundos
});
