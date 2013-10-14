-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 14, 2013 at 01:21 PM
-- Server version: 5.5.24-log
-- PHP Version: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hackafe`
--

-- --------------------------------------------------------

--
-- Table structure for table `sponsors`
--

CREATE TABLE IF NOT EXISTS `sponsors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `sponsor_tid` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `logo_url` varchar(512) NOT NULL,
  `website` varchar(512) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sponsor_tid` (`sponsor_tid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `sponsors`
--

INSERT INTO `sponsors` (`id`, `name`, `sponsor_tid`, `language_id`, `logo_url`, `website`) VALUES
(1, 'TRI Soft', 1, 1, 'trisoft.png', 'http://tri-soft.net/'),
(2, 'VisComp', 3, 1, '', 'http://www.viscomp.bg/'),
(3, 'MasConsult', 2, 1, '', 'http://www.masconsult.eu/');

-- --------------------------------------------------------

--
-- Table structure for table `sponsor_types`
--

CREATE TABLE IF NOT EXISTS `sponsor_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `type` (`type`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `sponsor_types`
--

INSERT INTO `sponsor_types` (`id`, `type`) VALUES
(1, 'general'),
(2, 'pro'),
(3, 'pro gold');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `sponsors`
--
ALTER TABLE `sponsors`
  ADD CONSTRAINT `sponsors_ibfk_1` FOREIGN KEY (`sponsor_tid`) REFERENCES `sponsor_types` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
