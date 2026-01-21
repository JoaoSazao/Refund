# 💰 Refund

Um sistema web moderno e intuitivo para gerenciamento de solicitações de reembolso de despesas corporativas.

![Refund](https://img.shields.io/badge/version-1.0.0-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎯 Sobre o Projeto

Refund é uma aplicação web para registro e controle de despesas que necessitam reembolso. Ideal para profissionais que precisam registrar gastos relacionados a trabalho, viagens corporativas, ou qualquer despesa reembolsável.

🔗 **[Ver Demo ao Vivo](https://refund-puce-delta.vercel.app/)**

## ✨ Funcionalidades

- ✅ **Registro de Despesas** - Adicione despesas com nome, categoria e valor
- ✅ **Categorização** - Organize despesas por: Alimentação, Hospedagem, Serviços, Transporte e Outros
- ✅ **Formatação Automática** - Valores convertidos automaticamente para formato BRL (R$)
- ✅ **Cálculo Total** - Soma automática de todas as despesas registradas
- ✅ **Contador de Despesas** - Visualize quantas despesas foram adicionadas
- ✅ **Remover Despesas** - Exclua itens desnecessários da lista
- ✅ **Interface Responsiva** - Design adaptável para todos os dispositivos
- ✅ **Validação de Formulário** - Campos obrigatórios e validação de dados

## 🚀 Demonstração

### Interface Principal
![Desktop Preview](https://via.placeholder.com/800x400/0066FF/FFFFFF?text=Refund+Desktop+Preview)

### Adicionando Despesa
![Add Expense](https://via.placeholder.com/600x300/0066FF/FFFFFF?text=Adicionar+Despesa)

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização moderna com Flexbox e Grid
- **JavaScript (Vanilla)** - Lógica de negócio e manipulação DOM

## 📦 Estrutura do Projeto

```
refund/
├── index.html              # Estrutura HTML principal
├── styles.css              # Estilos e design
├── scripts.js              # Lógica JavaScript
├── img/                    # Recursos visuais
│   ├── logo.svg           # Logo da aplicação
│   ├── accommodation.svg  # Ícone Hospedagem
│   ├── chevron-down.svg   # Ícone Select
│   ├── food.svg           # Ícone Alimentação
│   ├── others.svg         # Ícone Outros
│   ├── services.svg       # Ícone Serviços
│   ├── transport.svg      # Ícone Transporte
│   └── remove.svg         # Ícone Remover
└── README.md              # Documentação
```

## 🎨 Categorias Disponíveis

| Categoria | Ícone | Descrição |
|-----------|-------|-----------|
| 🍽️ Alimentação | food.svg | Refeições, lanches, bebidas |
| 🏨 Hospedagem | accommodation.svg | Hotéis, pousadas, acomodações |
| 🛠️ Serviços | services.svg | Serviços profissionais diversos |
| 🚗 Transporte | transport.svg | Combustível, táxi, passagens |
| 📦 Outros | others.svg | Despesas diversas |

## 💻 Como Usar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor local (opcional para desenvolvimento)

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/JoaoSazao/refund.git
```

2. Navegue até a pasta do projeto
```bash
cd refund
```

3. Abra o arquivo `index.html` no navegador ou use um servidor local

**Usando Live Server (VS Code):**
```bash
# Instale a extensão Live Server no VS Code
# Clique com botão direito em index.html > Open with Live Server
```

**Usando Python:**
```bash
# Python 3
python -m http.server 8000

# Acesse: http://localhost:8000
```

## 📱 Guia de Uso

### Adicionar Despesa

1. **Preencha o Nome da Despesa**
   - Digite uma descrição clara (ex: "Almoço com cliente")

2. **Selecione a Categoria**
   - Escolha entre: Alimentação, Hospedagem, Serviços, Transporte ou Outros

3. **Insira o Valor**
   - Digite apenas números
   - O sistema formata automaticamente para R$ XX,XX
   - Exemplo: Digite "150" → Exibe "R$ 1,50" → Digite "15000" → Exibe "R$ 150,00"

4. **Clique em "Adicionar despesa"**
   - A despesa aparecerá na lista à direita
   - O total será atualizado automaticamente
   - O contador de despesas será incrementado

### Remover Despesa

1. Localize a despesa na lista
2. Clique no ícone de lixeira 🗑️ ao lado da despesa
3. O item será removido e o total recalculado automaticamente

### Visualizar Totais

- **Contador**: Mostra quantas despesas foram adicionadas
- **Total Geral**: Soma automática de todas as despesas em R$

## 🎯 Funcionalidades Técnicas

### Formatação de Moeda

O sistema utiliza formatação inteligente para valores monetários:

```javascript
// Entrada do usuário: 15000
// Sistema converte: 15000 / 100 = 150.00
// Exibição: R$ 150,00
```

### Validação de Dados

- Campos obrigatórios: Nome, Categoria e Valor
- Validação de números no campo de valor
- Tratamento de erros com alertas informativos

### Cálculo Dinâmico

- Atualização automática do total ao adicionar/remover despesas
- Contador dinâmico de itens (singular/plural)
- Formatação BRL (Real Brasileiro) em tempo real

## 🔧 Detalhes de Implementação

### Estrutura de Dados

Cada despesa é um objeto JavaScript:

```javascript
{
  id: 1234567890,              // Timestamp único
  expense: "Almoço",           // Nome da despesa
  category_id: "food",         // ID da categoria
  category_name: "Alimentação", // Nome da categoria
  amount: "R$ 50,00",          // Valor formatado
  created_at: Date             // Data de criação
}
```

### Principais Funções

- `formatCurrencyBRL(value)` - Formata valores para moeda brasileira
- `expenseAdd(newExpense)` - Adiciona nova despesa à lista
- `updateTotals()` - Atualiza contador e valor total
- `inputsClear()` - Limpa formulário após submissão

## 🎨 Customização

### Adicionar Nova Categoria

1. Adicione a opção no HTML:
```html
<option value="nova-categoria">Nova Categoria</option>
```

2. Adicione o ícone SVG correspondente na pasta `img/`:
```
img/nova-categoria.svg
```

### Alterar Cores

Edite as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --primary-color: #0066FF;    /* Cor principal */
    --secondary-color: #F5F5F5;  /* Cor secundária */
    --text-color: #333333;       /* Cor do texto */
}
```

### Modificar Formato de Moeda

Para usar outra moeda, altere em `scripts.js`:

```javascript
value = value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",  // Dólar Americano
});
```

## 🚀 Deploy

### Deploy na Vercel

1. Instale a Vercel CLI
```bash
npm i -g vercel
```

2. Faça login
```bash
vercel login
```

3. Deploy do projeto
```bash
vercel
```

### Deploy no Netlify

1. Conecte seu repositório GitHub ao Netlify
2. Configure as settings:
   - Build command: (deixe vazio)
   - Publish directory: `/`
3. Clique em "Deploy"

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a Branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### Ideias para Contribuição

- [ ] Adicionar filtro por categoria
- [ ] Implementar busca de despesas
- [ ] Adicionar data nas despesas
- [ ] Exportar relatório em PDF
- [ ] Implementar localStorage para persistência
- [ ] Adicionar modo escuro
- [ ] Criar gráficos de gastos por categoria

## 👨‍💻 Autor

**SazonDEV**

- GitHub: [@seu-usuario](https://github.com/JoaoSazao)
- LinkedIn: [Seu Nome](https://www.linkedin.com/in/joao-victor-sa/)
- Email: jv.sadev.profissional@gmail.com

## 📊 Status do Projeto

✅ **Concluído** - Versão 1.0.0 estável e em produção

### Próximas Atualizações (Roadmap)

- 🔄 v1.1.0 - Adicionar persistência com localStorage
- 🔄 v1.2.0 - Implementar filtros e busca
- 🔄 v1.3.0 - Sistema de autenticação
- 🔄 v2.0.0 - Backend completo com banco de dados
