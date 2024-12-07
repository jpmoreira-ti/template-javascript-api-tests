# Template JavaScript API Tests
Template de testes de API em JavaScript utilizando [Jest](https://jestjs.io/) e [Supertest](https://github.com/visionmedia/supertest).

## Pré-requisitos
- [Node.js 16+](https://nodejs.org/) deve estar instalado.
- [npm](https://www.npmjs.com/) deve estar instalado.

## Instalação
Para instalar as dependências do projeto, execute o seguinte comando:

```sh
npm install
```

## Execução e Relatório de Testes
Para executar os testes e gerar o relatório de testes, execute o seguinte comando:

```sh
npm test
```

## Relatório de Testes
O relatório de testes é gerado no caminho ./reports/test-api-report.html.

## Plugins
Os seguintes plugins são usados no projeto e estão configurados no arquivo jest.config.js:

[jest-html-reporter](https://github.com/Hargne/jest-html-reporter): Utilizado para gerar relatórios de testes em HTML.