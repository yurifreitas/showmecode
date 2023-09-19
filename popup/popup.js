const injectFile = document.getElementById('inject-file');
const injectFunction = document.getElementById('inject-function');

async function getCurrentTab() {
  const queryOptions = { active: true, currentWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

injectFile.addEventListener('click', async () => {
  const tab = await getCurrentTab();
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content-script.js']
  });
});

function showAlert(givenName) {
  alert(`Hello, ${givenName}`);
}

injectFunction.addEventListener('click', async () => {
  const tab = await getCurrentTab();

  const name = 'World';
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: showAlert,
    args: [name]
  });
});

const observer = new MutationObserver((mutationsList, observer) => {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            // Verifique se o elemento adicionado corresponde à ação "levantar a mão"
            // ou outro evento que você deseja capturar
        }
    }
});

// Configuração do observador:
const config = { attributes: true, childList: true, subtree: true };

// Passar o elemento alvo para o Mutation Observer
observer.observe(document.body, config);
chrome.notifications.onButtonClicked.addListener(function(notificationId, buttonIndex) {
    console.log(`O botão com índice ${buttonIndex} da notificação com ID ${notificationId} foi clicado.`);
    // Sua lógica aqui
  });



