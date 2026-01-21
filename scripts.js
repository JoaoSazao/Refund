// SELEÇÃO DOS ELEMENTOS FORMULÁRIO
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

// Seleciona os elementos da lista
const expenseList = document.querySelector("ul");
const expensesQuantity = document.getElementById("updateItem");
const expensesTotal = document.querySelector("aside header h2");

// EXPRESSÃO REGULAR PARA FORMATAR VALOR (APENAS NÚMERICO)
amount.oninput = () => {
  // Obtém o valor atual do input e remove os caracteres não numéricos
  let value = amount.value.replace(/\D/g, "");

  // Transformar o valor em centavos
  value = Number(value) / 100;

  // Atualiza o valor do input
  amount.value = formatCurrencyBRL(value);
};

function formatCurrencyBRL(value) {
  // Formata o valor no padrão BRL ( Real Brasileiro )
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  // Retorna o valor formatado
  return value;
}

// Captura o evento de submit do Formulário, para obter os valores inseridos
form.onsubmit = (event) => {
  // Previne o comportamento padrão do reload da página
  event.preventDefault();

  // Cria um objeto com os detalhes na nova despesa
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  };

  // Chama a função que irá adicionar o item na lista
  expenseAdd(newExpense);
};

// Adiciona um novo item na Lista
function expenseAdd(newExpense) {
  try {
    // Cria o elemento de <li> para adicionar o item na lista
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense");

    // Cria o ícone da categoria
    const expenseIcon = document.createElement("img");
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute("alt", newExpense.category_name);

    // Cria as informações do item
    const expenseInfo = document.createElement("div");
    expenseInfo.classList.add("expense-info");

    expenseInfo.innerHTML = `
            <strong>${expense.value}</strong>
            <span>${category.options[category.selectedIndex].text}</span>
        `;

    // Cria o valor do item
    const expenseAmount = document.createElement("span");
    expenseAmount.classList.add("expense-amount");

    expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace("R$", "")}`;

    // Cria o ícone de remover
    const removeIcon = document.createElement("img");
    removeIcon.classList.add("remove-icon");
    removeIcon.setAttribute("src", "img/remove.svg");
    removeIcon.setAttribute("alt", "remover");

    // Adiciona as informações no item
    expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon);

    // Adiciona o item na lista
    expenseList.append(expenseItem);

    // Limpa o formulário após adicionar o item
    inputsClear();

    // Atualiza os totais
    updateTotals();


  } catch (error) {
    alert("Não foi possível atualizar a lista de despesas!");
    console.log(error);
  }
}

// Atualiza o número total das despesas
function updateTotals() {
  try {
    // Recupera todos os itens (li) da lista (ul)
    const items = expenseList.children;

    // Atualiza a quantidade de itens na lista
    expensesQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa"}`;

    // Variavel para incrementar o total
    let total = 0;

    // Percorre cada item (li) da lista (ul)
    for (let item = 0; item < items.length; item++) {
      const itemAmount = items[item].querySelector(".expense-amount");

      // Remover caracteres não numéricos e substitui a vírgula pelo ponto
      let value = itemAmount.textContent
        .replace(/[^\d,]/g, "")
        .replace(",", ".");

      // Converte o valor para float
      value = parseFloat(value);

      //Verifica se é um número válido
      if (isNaN(value)) {
        return alert(
          "Não foi possível calcular o total, certifique-se que o valor seja um número!",
        );
      }

      // Incrementa o valor total
      total += Number(value);
    }

    // Cria a span para adicionar o R$ formatado
    const symbolBRL = document.createElement("small");
    symbolBRL.textContent = "R$";

    // Formata o valor e remove o R$ que será exibido pela small com um estilo customizado do CSS
    total = formatCurrencyBRL(total).toUpperCase().replace("R$", "");

    // Limpa o conteúdo do elemento
    expensesTotal.innerHTML = "";

    expensesTotal.append(symbolBRL, total);
  } catch (error) {
    console.log(error);
    alert("Não foi possível atualizar os totais");
  }
}

// Evento que captura click no botão de remover
expenseList.addEventListener("click", function (event) {

  // Verifica se o elemento clicado é o icone de remover

  if (event.target.classList.contains('remove-icon')) {
    // Obtém a <li> pai do elemento clicado
    const item = event.target.closest('.expense');

    // Remove o item da lista
    item.remove();

  }

  // Atualiza o valor total após a exclusão do elemento pai
  updateTotals();
});

function inputsClear() {
  expense.value = ''
  category.value = ''
  amount.value = ''

  expense.focus();
}
