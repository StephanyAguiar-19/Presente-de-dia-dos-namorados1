var audio = document.querySelector("audio");

// Tenta reproduzir automaticamente; se bloqueado pelo navegador, cria um botão de play
if (audio) {
  audio.volume = 0.9;
  // Tenta tocar; alguns navegadores bloqueiam autoplay sem interação do usuário
  var playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch(function (error) {
      // Autoplay foi bloqueado: cria um botão visível para o usuário iniciar a música
      var btn = document.createElement("button");
      btn.textContent = "Tocar música";
      btn.className = "play-audio-btn";
      // Estilos mínimos para o botão
      btn.style.position = "fixed";
      btn.style.left = "50%";
      btn.style.top = "10px";
      btn.style.transform = "translateX(-50%)";
      btn.style.zIndex = 1000;
      btn.style.padding = "8px 12px";
      btn.style.background = "#6b3f9a";
      btn.style.color = "#fff";
      btn.style.border = "none";
      btn.style.borderRadius = "6px";
      btn.style.cursor = "pointer";
      document.body.appendChild(btn);

      function startAudio() {
        audio.play().then(function () {
          btn.remove();
        }).catch(function() {
          // Se continuar falhando, apenas remove o botão para evitar bloqueio de UI
          btn.remove();
        });
      }

      btn.addEventListener("click", startAudio);
      // Também permite iniciar com qualquer toque na página (para mobile)
      document.addEventListener("click", function once() {
        startAudio();
        document.removeEventListener("click", once);
      });
    });
  }
}

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);