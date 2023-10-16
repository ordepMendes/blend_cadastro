document.addEventListener("DOMContentLoaded", function () {
  const senhaInput = document.querySelector("#floatingInput[type='password']");
  const mostrarSenhaCheckbox = document.querySelector("#flexCheckDefault");
  const criarContaButton = document.querySelector(".btn-primary");
  const modalSucesso = new bootstrap.Modal(
    document.getElementById("modalSucess")
  );
  const modalError = new bootstrap.Modal(document.getElementById("modalError"));

  criarContaButton.addEventListener("click", function (e) {
    e.preventDefault();

    const nomeCompleto = document.querySelector(
      "#floatingInput[type='text']"
    ).value;
    const dataNascimento = document.querySelector("#data-nascimento").value;
    const email = document.querySelector("#floatingPassword").value;
    const senha = senhaInput.value;

    if (
      nomeCompleto === "" ||
      dataNascimento === "" ||
      email === "" ||
      senha === ""
    ) {
      modalError.show();
      setTimeout(function () {
        modalError.hide();
      }, 2000);
    } else {
      console.log("Nome Completo: " + nomeCompleto);
      console.log("Data de Nascimento: " + dataNascimento);
      console.log("E-mail: " + email);
      console.log("Senha: " + senha);

      modalSucesso.show();

      setTimeout(function () {
        modalSucesso.hide();
        nomeCompleto.value = "";
        dataNascimento.value = "";
        email.value = "";
        senhaInput.value = "";
        location.reload();
      }, 2000);
    }
  });

  mostrarSenhaCheckbox.addEventListener("change", function () {
    senhaInput.type = mostrarSenhaCheckbox.checked ? "text" : "password";
  });
});
