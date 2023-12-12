<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Vault</title>
    <link rel="icon" sizes="192x192" href="https://static.wixstatic.com/media/701313_0b888ace71d9490287fab24ad2df8621%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/701313_0b888ace71d9490287fab24ad2df8621%7Emv2.png" type="image/png" />
    <link rel="shortcut icon" href="https://static.wixstatic.com/media/701313_0b888ace71d9490287fab24ad2df8621%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/701313_0b888ace71d9490287fab24ad2df8621%7Emv2.png" type="image/png" />
    <link rel="apple-touch-icon" href="https://static.wixstatic.com/media/701313_0b888ace71d9490287fab24ad2df8621%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/701313_0b888ace71d9490287fab24ad2df8621%7Emv2.png" type="image/png" />
</head>

<body>
    <h1>Exemplo de uso</h1>
</body>

</html>


<script src="data-vault.js"></script>
<script>
    //  Váriaveis de configuração
    const DATA_VAULT_URL = "http://localhost/Data-Vault/run.php"
    const DATA_DBNAME = "auto_avaliar"
    // O nome do arquivo deve ser: nome-do-cliente_nome-do-app_mes[mmm]-ano[yyyy]
    const DATA_FILENAME = "auto-avaliar_chuva-produto_set_2023"
    // O nome do user name deve ser nome e sobrenome
    const DATA_USERNAME = "davi-cardoso"

    // Chamada do backup deve ter um parametro do tempo em segundos, se caso não for passado nenhum parametro, o default é 30s
    callBackup()
</script>