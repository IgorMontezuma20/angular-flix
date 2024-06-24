# AngularFlix

Esta aplicação é um clone da interface da Netflix, desenvolvida com Angular 17. Ela consome a API do [The Movie DB](https://www.themoviedb.org/) para obter dados sobre filmes. A aplicação permite a listagem de filmes em várias categorias, bem como a visualização dos detalhes dos filmes, incluindo elenco, imagens, trailer e data de cartaz.

## Funcionalidades

- **Listagem de Filmes**
- **Últimos lançamentos**
- **Categorias (e.g., Ação, Comédia, Drama)**
- **Avaliação (filmes com melhores avaliações)**
- **Filtrar por categoria**

- **Detalhe do Filme**
  - Informações do elenco
  - Imagens do filme
  - Trailer do filme
  - Data de cartaz

## Tecnologias Utilizadas

- **Angular 17**
- **RXJS**
- **PrimeNG** (biblioteca de componentes)
## Configuração da API

1. Crie uma conta no [The Movie DB](https://www.themoviedb.org/).
2. Gere uma chave de API.
3. Crie um arquivo `src/environments/environment.ts` e adicione sua chave de API:
    ```typescript
    export const environment = {
      production: false,
      apiKey: 'SUA_CHAVE_API'
    };
    ```
4. Crie um arquivo `src/environments/environment.prod.ts` para o ambiente de produção:
    ```typescript
    export const environment = {
      production: true,
      apiKey: 'SUA_CHAVE_API'
    };
    ```

    ## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/sua-feature`)
3. Commite suas alterações (`git commit -m 'Adiciona sua feature'`)
4. Faça um push para a branch (`git push origin feature/sua-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ❤️ por [Igor Montezuma](https://github.com/igor-montezuma-dev)
