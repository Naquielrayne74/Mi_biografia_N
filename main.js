document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("cuadros");

  for (let i = 0; i < 30; i++) crearCuadro();

  function crearCuadro() {
    const cuadro = document.createElement("div");
    cuadro.classList.add("cuadro");

    const size = Math.random() * 50 + 10;
    cuadro.style.width = `${size}px`;
    cuadro.style.height = `${size}px`;
    cuadro.style.left = `${Math.random() * 100}vw`;
    cuadro.style.animationDuration = `${Math.random() * 10 + 5}s`;
    cuadro.style.animationDelay = `${Math.random() * 5}s`;

    // Cuando se hace clic, explota en fragmentos
    cuadro.addEventListener("click", e => {
      const rect = cuadro.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Crear fragmentos
      for (let i = 0; i < 10; i++) {
        const frag = document.createElement("div");
        frag.classList.add("fragmento");

        // Posición inicial = centro del cuadro
        frag.style.left = `${centerX}px`;
        frag.style.top = `${centerY}px`;

        // Dirección aleatoria
        const dx = (Math.random() - 0.5) * 200 + "px";
        const dy = (Math.random() - 0.5) * 200 + "px";
        frag.style.setProperty("--dx", dx);
        frag.style.setProperty("--dy", dy);

        document.body.appendChild(frag);

        // Eliminar fragmento después de animación
        setTimeout(() => frag.remove(), 800);
      }

      // Quita el cuadro y crea uno nuevo
      cuadro.remove();
      crearCuadro();
    });

    contenedor.appendChild(cuadro);
  }
});
