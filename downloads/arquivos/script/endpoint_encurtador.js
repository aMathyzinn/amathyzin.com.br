document.addEventListener("DOMContentLoaded", () => {
  console.log("🔄 Script iniciado e DOM carregado.");

  const UMA_HORA = 60 * 60 * 1000;
  const TEMPO_MINIMO = 20 * 1000;

  const agora = Date.now();
  const ultimoAcessoValido = localStorage.getItem("lastValidAccess");
  const inicioEncurtador = localStorage.getItem("encStart");

  if (ultimoAcessoValido && agora - ultimoAcessoValido < UMA_HORA) {
    const tempoRestante = UMA_HORA - (agora - ultimoAcessoValido);
    console.log("✅ Acesso já liberado recentemente. Tempo restante até expirar:", Math.ceil(tempoRestante / 1000), "segundos");
    return;
  }

  function mostrarPopupDePassagem() {
    console.log("🛑 Mostrando popup para forçar passagem pelo encurtador.");
    
    Swal.fire({
      title: "Acesso Restrito",
      html: `
        Para acessar o conteúdo, você precisa passar pelo encurtador.<br><br>
        <button id="passarBtn" class="swal2-confirm swal2-styled">Passar pelo encurtador</button>
      `,
      icon: "warning",
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      backdrop: "rgba(0, 0, 0, 0.8)"
    });

    setTimeout(() => {
      const botao = document.getElementById("passarBtn");
      if (botao) {
        botao.addEventListener("click", () => {
          console.log("➡️ Usuário clicou para passar pelo encurtador.");
          localStorage.setItem("encStart", Date.now());
          window.location.href = "https://fir3.net/RoBooster2";
        });
      } else {
        console.warn("⚠️ Botão de passar não encontrado.");
      }
    }, 100);
  }

  if (inicioEncurtador) {
    const tempoDecorrido = agora - parseInt(inicioEncurtador, 10);

    console.log("⏱ Tempo desde o clique no encurtador:", Math.ceil(tempoDecorrido / 1000), "segundos");

    if (tempoDecorrido < TEMPO_MINIMO) {
      console.log("❌ Tempo insuficiente. Usuário voltou muito rápido.");
      Swal.fire({
        title: "Acesso Negado",
        text: "Você voltou rápido demais. Tente novamente.",
        icon: "error",
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonText: "Tentar novamente",
        backdrop: "rgba(0, 0, 0, 0.8)"
      }).then(() => {
        console.log("🔁 Reiniciando fluxo de passagem.");
        localStorage.removeItem("encStart");
        mostrarPopupDePassagem();
      });

      return;
    } else {
      console.log("✅ Tempo mínimo cumprido. Acesso liberado.");
      localStorage.setItem("lastValidAccess", agora);
      localStorage.removeItem("encStart");
      return;
    }
  }

  mostrarPopupDePassagem();
});
