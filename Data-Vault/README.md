# Data Vault

O **Data-Vault** é uma ferramenta moderna e eficiente para realizar backups de dados de forma simples e integrada aos seus projetos. Siga os passos abaixo para começar:

## Início Rápido

### 1. Baixando o Projeto

Para adicionar o Data-Vault ao seu projeto, utilize o seguinte comando para adicionar como submódulo:

```bash
  git submodule add https://github.com/Glide-Tecnologia/Data-Vault.git
```
Em seguida, para garantir que os submódulos sejam inicializados e atualizados, execute:
    
```bash
  git submodule update --init --recursive
```

### 2. Atualizando o Submódulo

Se deseja obter a versão mais recente do Data-Vault, utilize o seguinte comando:

```bash
  git submodule update --remote
```

## Váriáveis do Projeto

Essas são às variáveis que você precisa ter no seu javascript:

`DATA_VAULT_URL`: Caminho para seu projeto pela URL real do seu endpoint de backup.

`DATA_DBNAME`: Nome do seu banco de dados.

`DATA_FILENAME`: O nome do arquivo deve seguir o formato: nome-do-cliente_nome-do-app_mes[mmm]-ano[yyyy].

`DATA_USERNAME`: O nome de usuário deve ser composto pelo nome e sobrenome.


## Instalando no Seu Projeto

Adicione as seguintes linhas ao seu código HTML, onde você deseja incorporar o Data-Vault:

_Substitua 'caminho/para/seu/projeto' pelo caminho real onde foi instalado o módulo._

```javascript
  <script src="caminho/para/seu/projeto/Data-Vault/data-vault.js"></script>
```

_Coloque as informações das váriaveis da API._

```javascript
<script>
    const DATA_VAULT_URL = "caminho/para/seu/projeto/Data-Vault/run.php";
    const DATA_DBNAME = "nome_do_banco";
    const DATA_FILENAME = "cliente_app_set_2023";
    const DATA_USERNAME = "nome-sobrenome";
</script>
```
_O parâmetro de tempo em segundos pode ser adicionado à chamada do backup **callBackup(60)**. Caso nenhum parâmetro seja fornecido, o valor padrão é de 30 segundos._

```javascript
<script>
    //Com tempo padrão, 30 segundos
    callBackup();
</script>
```

```javascript
<script>
    //Com tempo de 60 segundos
    callBackup(60);
</script>
```


### Uso/Exemplos

```javascript
<script src="http://localhost/Data-Vault/data-vault.js"></script>
<script>
    const DATA_VAULT_URL = "http://localhost/Data-Vault/run.php"
    const DATA_DBNAME = "auto_avaliar"
    const DATA_FILENAME = "auto-avaliar_chuva-produto_set_2023"
    const DATA_USERNAME = "davi-cardoso"
    callBackup(60)
</script>
```


## Suporte

Esse projeto é suportado por:

- PHP
- Laragon
- React
- Python
- Entre outras linguagens web
