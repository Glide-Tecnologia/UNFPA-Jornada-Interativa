const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
const port = 3001 // Defina a porta que deseja usar para o servidor

// Configuração do banco de dados MySQL
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'unfpa'
}

let db

// Função para conectar ao banco de dados
function connectToDatabase () {
  db = mysql.createConnection(dbConfig)

  db.connect(err => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err)
      console.log('Tentando novamente em 5 segundos...')
      setTimeout(connectToDatabase, 5000)
    } else {
      console.log('Conexão com o banco de dados estabelecida!')

      // Inicie o servidor após a conexão com o banco de dados
      startServer()
    }
  })

  db.on('error', err => {
    console.error('Erro na conexão com o banco de dados:', err)
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.log(
        'A conexão com o banco de dados foi perdida. Tentando reconectar...'
      )
      connectToDatabase()
    } else {
      throw err
    }
  })
}

// Função para iniciar o servidor após a conexão com o banco de dados
function startServer () {
  // Middleware para permitir solicitações de outros domínios (Cross-Origin Resource Sharing)
  app.use(cors())
  app.use(express.json())

  // Rota inicial
  app.get('/', (req, res) => {
    res.send('Bem-vindo à API do seu projeto Node.js!')
  })

  // Rota para listar todos os cadastros
  app.get('/backup', (req, res) => {
    const sql = 'SELECT * FROM jogador WHERE status="aguardando" LIMIT 1'

    db.query(sql, (err, result) => {
      if (err) {
        console.error('Erro ao buscar cadastros:', err)
        res.status(500).json({ error: 'Erro ao buscar cadastros' })
        return
      }

      res.json(result)
    })
  })

  // Rota para ver a porcentagem dos ganhadores
  app.get('/ganhadores', (req, res) => {
    const sql = 'SELECT COUNT(*) AS ganhadores FROM `jogador` WHERE pontos > 3'

    db.query(sql, (err, result) => {
      if (err) {
        console.error('Erro ao buscar cadastro:', err)
        res.status(500).json({ error: 'Erro ao buscar cadastro' })
        return
      }

      res.json(result)
    })
  })

  // Rota para ver a a quantidade total
  app.get('/ranking', (req, res) => {
    const sql = "SELECT tema, COUNT(*) as quantidade, ROUND((COUNT(*) / (SELECT COUNT(tema) FROM jogador, JSON_TABLE(temas, '$[*]' COLUMNS (tema VARCHAR(255) PATH '$')) AS temas_json)) * 100, 2) as porcentagem FROM jogador, JSON_TABLE(temas, '$[*]' COLUMNS (tema VARCHAR(255) PATH '$')) AS temas_json GROUP BY tema ORDER BY quantidade DESC LIMIT 5"

    // SELECT
    //     tema,
    //     COUNT(*) as quantidade,
    //     ROUND((COUNT(*) / (SELECT COUNT(tema) FROM jogador, JSON_TABLE(temas, '$[*]' COLUMNS (tema VARCHAR(255) PATH '$')) AS temas_json)) * 100, 2) as porcentagem
    // FROM
    //     jogador,
    //     JSON_TABLE(temas, '$[*]' COLUMNS (tema VARCHAR(255) PATH '$')) AS temas_json
    // GROUP BY
    //     tema
    // ORDER BY 
    //   quantidade DESC
    // LIMIT 5;

    db.query(sql, (err, result) => {
      if (err) {
        console.error('Erro ao buscar cadastro:', err)
        res.status(500).json({ error: 'Erro ao buscar cadastro' })
        return
      }

      res.json(result)
    })
  })

  // Rota para criar um novo cadastro
  app.post('/cadastros', (req, res) => {
    const { conhece, eixo, temas } = req.body

    const insertSql =
      'INSERT INTO jogador (conhece, eixo, temas) VALUES (?,?,?)'
      console.log(conhece)
      console.log(eixo)
      console.log(temas)
    const values = [conhece, eixo, temas]

    db.query(insertSql, values, (err, result) => {
      if (err) {
        console.error('Erro ao criar cadastro:', err)
        res.status(500).json({ error: 'Erro ao criar cadastro' })
        return
      }

      res.json({ id: result.insertId })
    })
  })

  // Rota para atualizar um cadastro
  app.put('/comentario/:id', (req, res) => {
    const { id } = req.params // Supondo que o unidade do cadastro seja passado
    const { comentario } = req.body // Recebe os valores do corpo da requisição
    const sql = 'UPDATE jogador SET outroTema = ? WHERE id = ?'
    const values = [comentario, id]

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Erro ao atualizar cadastro:', err)
        res.status(500).json({ error: 'Erro ao atualizar cadastro' })
        return
      }

      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Cadastro não encontrado' })
        return
      }

      res.json({ id })
    })
  })

  // Rota para da status do backup
  app.put('/backup/:id', (req, res) => {
    const { id } = req.params // Supondo que o unidade do cadastro seja passado
    const { status } = req.body // Recebe os valores do corpo da requisição
    const sql = 'UPDATE jogador SET status = ? WHERE id = ?'
    const values = [status, id]

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Erro ao atualizar cadastro:', err)
        res.status(500).json({ error: 'Erro ao atualizar cadastro' })
        return
      }

      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Cadastro não encontrado' })
        return
      }

      res.json({ id })
    })
  })

  // Iniciar o servidor
  app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`)
  })
}

// Iniciar a tentativa de conexão ao banco de dados
connectToDatabase()
