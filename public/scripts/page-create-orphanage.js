const map = L.map("mapid").setView([-22.8914, -48.443], 15);

//create and add tileLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
  map
);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;
  // remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//  adicionar o campo de fotos

function addPhotoField() {
  // pegar o container de fotos #id=images
  const container = document.querySelector("#images");
  // pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  // verifica se está vazio ou não, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  //limpeza do campo antes de adicionar ao container de imagens
  input.value = "";

  // adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }
  // deletar o campo
  span.parentNode.remove();
}

// troca do sim e não

function toggleSelect(event) {
  // retirar a classe .active dos botões
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active")); // com 1 só linha pode-se retirar as () e {}

  // colocar a classe .active no botão clicado
  const button = event.currentTarget;
  button.classList.add("active");

  // pegar o botão clicado
  // atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;
  // verificar se sim ou não
}

function validate(event) {
  const lat = document.querySelector('[name="lat"]').value;
  const lng = document.querySelector('[name="lng"]').value;

  if (lat == "" || lng == "") {
    event.preventDefault();
    alert("Selecione um ponto no mapa!");
  }
}
