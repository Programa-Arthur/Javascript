# Entendendo Módulos no Node.js

Os módulos são uma parte essencial do Node.js, pois ajudam a organizar e reutilizar códigos em aplicações. Eles funcionam como "blocos de construção" que permitem dividir uma aplicação em partes menores e mais gerenciáveis.

**O que é um Módulo?**

Um módulo é um arquivo que contém código JavaScript que pode ser exportado e utilizado em outros arquivos. No Node.js, cada arquivo é tratado como um módulo separado.

Existem três tipos principais de módulos:

1. **Módulos nativos:** Incluídos no Node.js (como fs, http e path).

2. **Módulos de terceiros:** Instalados através do npm (Node Package Manager).

3. **Módulos criados por você:** Arquivos personalizados que você escreve.

## Criando e Utilizando um Módulo

Vamos criar um módulo personalizado para entender como eles funcionam.

**Passo 1:** Criando o Módulo
Crie um arquivo chamado meuModulo.js e adicione o seguinte código:

**Passo 2:** Usando o Módulo
Agora crie outro arquivo chamado app.js e importe o módulo que acabamos de criar:

**Passo 3:** Executando o Código
No terminal, execute o arquivo app.js: node app.js

Você deve ver a mensagem: Olá, João! Bem-vindo ao Node.js!

# Como os Módulos Ajudam?

**Reutilização:** Você pode usar o mesmo código em várias partes de sua aplicação.

**Organização:** Facilita a manutenção do código dividindo-o em partes menores.

**Colaboração:** Equipes podem trabalhar em diferentes módulos simultaneamente.

Agora que você entende o conceito de módulos, experimente criar seus próprios módulos para resolver problemas específicos em suas aplicações. Divirta-se programando!

