function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let data = new Date();
  let hora = data.getHours();

  hora = 6;
  if (hora > 2 && hora < 12) {
    //Dia
    msg.innerHTML = `Bom dia! Agora são <strong>${hora}</strong> horas`;
    img.src = "./img/fotoManha.png";
  }
}
