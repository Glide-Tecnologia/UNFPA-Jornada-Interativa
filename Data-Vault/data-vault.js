// Variáveis segue o seguinte padrão:
// CONSTANTE: (Todas letras maisculas)
// _global: (Começa com underline (_))
// local: (Todas miniscula sem unerline)

let _data_vault_call

function backupFileSql () {
  // Função de backup de sql
  fetch(DATA_VAULT_URL, {
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `dbname=${DATA_DBNAME}&filename=${DATA_FILENAME}&username=${DATA_USERNAME}`
  })
    .then(response => response.json())
    .then(result => {
      if (result.mensagem == 'Sucesso') {
        console.log('Banco de dados salvo no host offline')
        backupFileSqlRemote(result.texto)
      }
    })
    .catch(error => {
      console.error('Erro:', error)
    })
}

function backupFileSqlRemote (data) {
  // Crie um objeto FormData
  var formData = new FormData()
  // Crie uma instância de File para representar o arquivo
  var arquivo = new File([data], 'arquivo.sql')
  // Adicione o arquivo ao FormData
  formData.append('arquivo_sql', arquivo)

  // Adicione os parâmetros ao FormData
  formData.append('username', DATA_USERNAME)
  formData.append('filename', DATA_FILENAME)

  // Função de backup de sql online
  fetch('https://vault.interatividades.com.br/api/create-test-file', {
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    body: formData
  })
    .then(response => response.json())
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.error('Erro:', error)
    })
}

function callBackup (time = 30) {
  backupFileSql()
  time *= 1000
  clearInterval(_data_vault_call)
  _data_vault_call = setInterval(backupFileSql, time)
}
