# Variáveis em Javascript
Repositório Desenvolvimento Web II - JavaScript

```markdown
# 🚀 Entendendo `var`, `let`, `const` e Escopo de Variáveis em JavaScript

Bem-vindo ao repositório! Aqui você encontrará uma explicação detalhada sobre as palavras-chave `var`, `let`, `const` e os diferentes tipos de escopo em JavaScript, com exemplos práticos para facilitar o aprendizado.

---

## 📚 Conteúdo

1. [Introdução](#introdução)
2. [Diferenças entre `var`, `let` e `const`](#diferenças-entre-var-let-e-const)
3. [Tipos de Escopo](#tipos-de-escopo)
4. [Exemplos de Código](#exemplos-de-código)
5. [Atividade Prática](#atividade-prática)
6. [Referências](#referências)

---

## 📝 Introdução

O JavaScript possui três formas principais de declarar variáveis:  
- `var`: tradicional e com escopo global ou de função.  
- `let`: moderna, com escopo de bloco, ideal para variáveis mutáveis.  
- `const`: moderna, com escopo de bloco, usada para valores constantes.

Além disso, o conceito de **escopo** define onde as variáveis podem ser acessadas ou modificadas.

---

## 🔍 Diferenças entre `var`, `let` e `const`

| Característica       | `var`                           | `let`                         | `const`                       |
|----------------------|----------------------------------|--------------------------------|--------------------------------|
| **Escopo**           | Global ou função                | Bloco                         | Bloco                         |
| **Redeclaração**     | Permitida                       | Não permitida                 | Não permitida                 |
| **Reatribuição**     | Permitida                       | Permitida                     | Não permitida                 |
| **Hoisting**         | Sim (inicializada como `undefined`) | Sim (não inicializada)       | Sim (não inicializada)       |
---
Hoisting é um comportamento do JavaScript no qual declarações de variáveis, funções ou classes são "movidas" para o topo de seu escopo antes da execução do código. Isso significa que você pode usar variáveis e funções antes de declará-las no código, com algumas limitações e peculiaridades.
---

## 🌐 Tipos de Escopo

1. **Global**: Variáveis disponíveis em todo o código.
2. **Função**: Variáveis acessíveis apenas dentro da função.
3. **Bloco**: Variáveis definidas entre `{}`.

### Representação Visual

```javascript
// Escopo Global
var globalVar = "Global";

// Escopo de Bloco
if (true) {
    let blocoLet = "Bloco";
    const blocoConst = "Constante";
}

// Escopo de Função
function exemploFuncao() {
    var localVar = "Local";
    console.log(localVar);
}
```

---

## 💻 Exemplos de Código

### 1. Uso de `var`
```javascript
if (true) {
    var exemploVar = "Visível fora do bloco!";
}
console.log(exemploVar); // Funciona
```

### 2. Uso de `let`
```javascript
if (true) {
    let exemploLet = "Visível apenas dentro do bloco!";
    console.log(exemploLet); // Funciona
}
// console.log(exemploLet); // Erro: exemploLet não está definido
```

### 3. Uso de `const`
```javascript
const PI = 3.14;
console.log(PI); // 3.14
// PI = 3.15; // Erro: Não é permitido alterar uma const
```

---

## 🏋️‍♂️ Atividade Prática

1. Crie uma variável global com `var`.
2. Declare variáveis dentro de um bloco usando `let` e `const`.
3. Experimente acessar as variáveis fora do bloco e analise os erros.

---

## 🔗 Referências

- [MDN Web Docs: var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [MDN Web Docs: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN Web Docs: const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

---

> **Dica**: Prefira `const` sempre que possível e utilize `let` quando o valor precisar mudar. Evite `var` em projetos modernos.

---

💡 **Contribua**  
Sugestões e melhorias são bem-vindas! Sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.