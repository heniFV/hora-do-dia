function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let data = new Date();
  let hora = data.getHours();

  //hora para teste.
  //hora = 19;

  if (hora > 2 && hora < 12) {
    //Dia
    msg.innerHTML = `Bom dia! Agora são <strong>${hora}</strong> horas.`;
    img.src = "./img/fotoManha.png";
  } else if (hora >= 12 && hora < 18) {
    //Tarde
    msg.innerHTML = `Boa Tarde! Agora são <strong>${hora}</strong> horas.`;
    img.src = "./img/fotoTarde.png";
  } else {
    //Noite
    msg.innerHTML = `Boa noite! Agora são <strong>${hora}</strong> horas.`;
    img.src = "./img/fotoNoite.png";
  }
}
