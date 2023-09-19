const emojiButtons = document.querySelectorAll('.sg22sf');
console.log(emojiButtons);
// Adiciona um ouvinte de eventos de clique a cada botão
emojiButtons.forEach((button) => {
  button.addEventListener('click', function(event) {
    // Obtém o emoji do botão clicado
    const clickedEmoji = this.getAttribute('data-emoji');
    
    // Faça algo com o emoji
    console.log(`O emoji ${clickedEmoji} foi clicado.`);
  });
});
const listItems = document.querySelectorAll('div[role="listitem"]');

// Crie um array para armazenar os nomes
const names = [];

// Itere através de cada item da lista
listItems.forEach((item) => {
  // Encontre o span que contém o nome
  const nameSpan = item.querySelector('span.zWGUib');
  
  // Se o nome existir, adicione-o ao array
  if (nameSpan) {
    names.push(nameSpan.textContent);
  }
});
const namesToSelect = [
];

// Encontra todos os elementos input do tipo checkbox
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Percorre cada checkbox para ver se o nome correspondente está na lista de nomes
checkboxes.forEach(checkbox => {
  const label = checkbox.nextElementSibling;
  if (label) {
    const name = label.textContent.trim();
    if (namesToSelect.includes(name)) {
      checkbox.checked = true; // Marca o checkbox
    }
  }
});
// Imprima os nomes como uma tabela no console
console.table(names);