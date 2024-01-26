


// Elemento com o ID "greeting"
const greetingElement = document.getElementById("greeting");

// Hora atual do sistema
const currentHour = new Date().getHours();

// Define a saudação com base na hora atual


// Forma mais simples
const greetingMessage =
  currentHour >= 5 && currentHour < 12
    ? "Bom dia"
    : currentHour >= 12 && currentHour < 18
    ? "Boa tarde"
    : "Boa noite";

greetingElement.textContent = greetingMessage;

// GRID INTELIGENTE
const container = document.querySelector(".offer__list-item");

const observer = new ResizeObserver(() => {  //mudanças no tamanho do elemento 
  const containerWidth = container.offsetWidth; //largura total do elemento, incluindo largura do conteúdo, bordas e preenchimento.
  const numColumns = Math.floor(containerWidth / 200); //número de colunas com base na largura do container

  //largura mínima de 200px e máxima de 1fr (uma fração do espaço disponível).
  container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;

  console.log({ container });
  console.log({ numColumns });
});
//observando a mudança do elemento
observer.observe(container);


const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');


function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`
  fetch(url)
  .then((response)=> response.json())
  .then((result) => displayResults(result))
}

function displayResults(result) {
  resultPlaylist.classList.add('hidden');
  const artistName = document.getElementById('artist-name');
  const artistImage = document.getElementById('artist-img');

  result.forEach(element => {
      artistName.innerText = element.name;
      artistImage.src = element.urlImg;
  });

  resultsArtist.classList.remove('hidden');
}


document.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  if(searchTerm === ''){
    resultPlaylist.classList.add('hidden');
    resultsArtist.classList.remove('hidden');
    return;
  }
})



