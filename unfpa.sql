-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 13/12/2023 às 14:38
-- Versão do servidor: 8.0.30
-- Versão do PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `unfpa`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `jogador`
--

CREATE TABLE `jogador` (
  `id` int NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `dataNascimento` varchar(255) DEFAULT NULL,
  `genero` varchar(255) DEFAULT NULL,
  `raca` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `conhece` varchar(255) NOT NULL,
  `eixo` varchar(255) DEFAULT NULL,
  `temas` varchar(255) DEFAULT NULL,
  `outroTema` varchar(5000) DEFAULT NULL,
  `dataCadastro` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `jogador`
--

INSERT INTO `jogador` (`id`, `nome`, `dataNascimento`, `genero`, `raca`, `estado`, `email`, `conhece`, `eixo`, `temas`, `outroTema`, `dataCadastro`) VALUES
(15, 'Davi Cardoso', '15/Março/1994', 'Homem cis', 'Branca', 'RJ', NULL, 'Não', 'Espaço e mobilidade', '[\"Direitos das pessoas com deficiência\",\"Igualdade racial\",\"Dignidade mentrual\",\"Igualdade de Gênero\",\"Meio-ambiente e sustentabilidade\"]', NULL, '2023-12-12 12:05:42'),
(16, 'Hgggg', '10/Maio/1914', 'Homem cis', 'Parda', 'BA', 'dddd@gmail.com', 'Não', 'Espaço e mobilidade', '[\"Direitos das pessoas com deficiência\",\"Direitos dos povos indígenas\",\"Igualdade racial\",\"Direitos LGBTQIA+\",\"Igualdade de Gênero\"]', 'dddd', '2023-12-13 09:43:54'),
(17, 'Eddd', '4/Abril/1913', 'Homem cis', 'Parda', 'BA', 'ttff@gmail.com', 'Não', 'Espaço e mobilidade', '[\"Direitos das pessoas com deficiência\",\"Educação em sexualidade\",\"Direitos dos povos indígenas\",\"Paz, segurança e erradicação de violências\",\"Igualdade racial\"]', NULL, '2023-12-13 10:07:03'),
(18, 'Davi', '15/Março/1994', 'Homem cis', 'Branca', 'SP', 'davi@gmail.com', 'Sim', 'Saúde', '[\"Cidades inclusivas e transporte de qualidade\",\"Igualdade de Gênero\",\"Saúde, incluindo saúde sexual e reprodutiva\",\"Paz, segurança e erradicação de violências\",\"Igualdade racial\"]', 'qqq', '2023-12-13 10:43:03');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `jogador`
--
ALTER TABLE `jogador`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `jogador`
--
ALTER TABLE `jogador`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
