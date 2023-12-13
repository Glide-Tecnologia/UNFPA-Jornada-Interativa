-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 12/12/2023 às 18:38
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
CREATE DATABASE IF NOT EXISTS `unfpa` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `unfpa`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `jogador`
--

CREATE TABLE `jogador` (
  `id` int NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `dataNascimento` varchar(255) DEFAULT NULL,
  `genero` varchar(255) DEFAULT NULL,
  `raça` varchar(255) DEFAULT NULL,
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

INSERT INTO `jogador` (`id`, `nome`, `dataNascimento`, `genero`, `raça`, `estado`, `email`, `conhece`, `eixo`, `temas`, `outroTema`, `dataCadastro`) VALUES
(9, NULL, NULL, NULL, NULL, NULL, NULL, 'Sim', 'Espaço e mobilidade', '[\"Igualdade de Gênero\",\"Políticas de juventude fortalecidas\",\"Cidades inclusivas e transporte de qualidade\",\"Dignidade mentrual\",\"Educação em sexualidade\"]', NULL, '2023-12-12 11:00:24'),
(10, NULL, NULL, NULL, NULL, NULL, NULL, 'Sim', 'Espaço e mobilidade', '[\"Igualdade de Gênero\",\"Políticas de juventude fortalecidas\",\"Cidades inclusivas e transporte de qualidade\",\"Dignidade mentrual\",\"Educação em sexualidade\"]', NULL, '2023-12-12 11:01:09'),
(11, NULL, NULL, NULL, NULL, NULL, NULL, 'Não', 'undefined', '[\"Educação em sexualidade\",\"Direitos dos povos indígenas\",\"Igualdade racial\",\"Paz, segurança e erradicação de violências\",\"Cidades inclusivas e transporte de qualidade\"]', NULL, '2023-12-12 11:10:10'),
(12, NULL, NULL, NULL, NULL, NULL, NULL, 'Não', 'undefined', '[\"Saúde, incluindo saúde sexual e reprodutiva\",\"Cidades inclusivas e transporte de qualidade\",\"Educação de qualidade e empregabilidade\",\"Paz, segurança e erradicação de violências\",\"Meio-ambiente e sustentabilidade\"]', NULL, '2023-12-12 11:27:41'),
(13, NULL, NULL, NULL, NULL, NULL, NULL, 'Não', 'undefined', '[\"Cidades inclusivas e transporte de qualidade\",\"Saúde, incluindo saúde sexual e reprodutiva\",\"Paz, segurança e erradicação de violências\",\"Educação de qualidade e empregabilidade\",\"Meio-ambiente e sustentabilidade\"]', NULL, '2023-12-12 11:27:51'),
(14, NULL, NULL, NULL, NULL, NULL, NULL, 'Não', 'undefined', '[\"Educação de qualidade e empregabilidade\",\"Cidades inclusivas e transporte de qualidade\",\"Saúde, incluindo saúde sexual e reprodutiva\",\"Paz, segurança e erradicação de violências\",\"Meio-ambiente e sustentabilidade\"]', NULL, '2023-12-12 11:28:02'),
(15, NULL, NULL, NULL, NULL, NULL, NULL, 'Não', 'Espaço e mobilidade', '[\"Direitos das pessoas com deficiência\",\"Igualdade racial\",\"Dignidade mentrual\",\"Igualdade de Gênero\",\"Meio-ambiente e sustentabilidade\"]', 'carro', '2023-12-12 12:05:42');

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
