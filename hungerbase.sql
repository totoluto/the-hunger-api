-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: hungerbase
-- ------------------------------------------------------
-- Server version	5.5.5-10.5.9-MariaDB-1:10.5.9+maria~focal

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_sequence` (
  `next_not_cached_value` bigint(21) NOT NULL,
  `minimum_value` bigint(21) NOT NULL,
  `maximum_value` bigint(21) NOT NULL,
  `start_value` bigint(21) NOT NULL COMMENT 'start value when sequences is created or value if RESTART is used',
  `increment` bigint(21) NOT NULL COMMENT 'increment value',
  `cache_size` bigint(21) unsigned NOT NULL,
  `cycle_option` tinyint(1) unsigned NOT NULL COMMENT '0 if no cycles are allowed, 1 if the sequence should begin a new cycle when maximum_value is passed',
  `cycle_count` bigint(21) NOT NULL COMMENT 'How many cycles have been done'
) ENGINE=InnoDB SEQUENCE=1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (1,1,9223372036854775806,1,1,1000,0,0);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `person`
--

DROP TABLE IF EXISTS `person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `person` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `nationality` varchar(100) NOT NULL,
  `favoriteweapon` varchar(100) NOT NULL,
  `birthdate` date NOT NULL,
  `kd` float NOT NULL,
  `sector` varchar(100) NOT NULL,
  `alive` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `person`
--

LOCK TABLES `person` WRITE;
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` VALUES (1,'Elon Musk','South Africa','Flamethrower','1971-06-28',2,'1',0),(2,'Jeffrey Epstein','USA','Children','1953-01-20',9,'1',0),(3,'Pope Francis','Argentina','Holy Water','1932-05-13',0,'2',0),(4,'Her Queen Majesty Elizabeth the II','Great Britain','Peasants','1922-09-22',1,'2',0),(5,'Bidoof','Pokémon','Violence','0001-01-01',4,'3',0),(6,'Jake Paul','USA','Brass Knuckles','1987-04-02',1,'3',0),(7,'Katniss Everdeen','Mordor','Bow and arrows','2000-03-24',0,'4',0),(8,'Asmeday denster','Moria','Crossbow','2004-03-12',3,'4',1),(9,'Shrek','Swamp','Stick','2000-06-07',0,'5',0),(10,'Ricardo Milos','Spain','Fists','1988-10-30',0,'5',0),(11,'Fridolin','Tajikistan','Trident','1963-04-09',0,'6',0),(12,'Fredrick Little ','Iran','Sword','1961-07-01',1,'6',0),(13,'Cameron Boyd ','Dominica','Axe','1942-10-05',0,'7',0),(14,'Geneva Moody','Pakistan','Chainsaw','2010-05-21',0,'7',0),(15,'Myrtle Bush ','Malta','Katana','1999-04-09',0,'8',0),(16,'Lynda Robinson','Kuwait','Fork','1982-01-04',0,'8',0),(17,'Betsy Gray ','Namibia','Poision','1957-08-19',1,'9',0),(18,'Marilyn Maldonado','Bolivia','Explosives','2002-06-20',0,'9',0),(19,'Hector Kim','China','Spear','1962-07-27',0,'10',0),(20,'Alexander Schultz','Serbia','Nunchucks','1986-05-06',0,'10',0),(21,'Lora Herrera','Madagascar','Baseballbat','1975-12-11',2,'11',0),(22,'Winifred Franklin ','Paraguay','Molotov cocktail','1945-11-04',0,'11',0),(23,'Sherman Obrien ','Japan','Kusarigama','1952-08-10',0,'12',0),(24,'Kimberly Cox','Angola','Scythe','1972-09-23',0,'12',0);
/*!40000 ALTER TABLE `person` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'hungerbase'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-08 12:21:25
