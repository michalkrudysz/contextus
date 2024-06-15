-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: contextus-database
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'michal','Michał','michal@drontrzebownisko.pl','$2a$10$9TrP2izzG5jGh4rl6rpcjusAIG8GZNotxKnCapQDRpTu4vnIbPASy','2024-05-29 14:41:33'),(2,'rafalek','Rafał','rafalek@rafalek.pl','$2a$10$bUzUl/UWYd3Ik4BEUosn8OfReuscjguN/EjWdD/Ts2WC/zW4UC./a','2024-05-29 14:48:44'),(3,'andrzejek19','Andrzej','andrzej@andrzej.pl','$2a$10$uqq4rPr0uDgt6Takxt0wW.S2FPEU1SUVLMs8bOdNpgWeCAP1QM4G2','2024-05-29 14:52:55'),(4,'roman','Roman','roman@roman.pl','$2a$10$x.LqPcsPSOrkoBl4TP0qp.uj0uups.n1BYOHRcTlz2cJS/lPi/1pC','2024-05-30 10:40:27'),(5,'sda','Roman','kr.mic@o2.pl','$2a$10$eEBuLkKW1ia9kX44PlO2/O244rwnnNztboDeOM64H4vw4Ke6CON/2','2024-05-30 10:42:23'),(6,'romanek0828','Roman','roman@roman2.pl','$2a$10$Z/kd.fgJ8610cRf9MUiYa.PdWWb1vKcyairbpevUv.vboAa8x95Aq','2024-05-30 10:43:56'),(7,'das','dsadsa','dsadsa@dsdsaasa.pl','$2a$10$swuVE612Kw.Vo1uq7lBTR.//wUBgZYe05d8qu3vsiXU4chMQfX2My','2024-05-30 10:49:02'),(8,'romanek1324','Roman','os@dsa.pl','$2a$10$ue7ERDRilXKK6RXXhetaIOh0eu5T2jDdx/vcypL0209c5WnRU.DM2','2024-05-30 10:52:41'),(9,'patryk','Patryk','patryk@patryk.pl','$2a$10$GUwwmUfy9JS3G7NvDJD.BOYow70yVZJM6TCKSIqiswDvVhHzMwYoW','2024-05-30 13:15:59'),(10,'seb09','Sebastian','seba@seba.pl','$2a$10$qDVreWfK.j7fQRQ6eN/7f.YtY4Q8xztYpHUFvtFaRykxIvFJZnbO2','2024-05-31 13:53:26'),(11,'patrykos','Zygmunt','patryk@patr23yk.pl','$2a$10$rItXjVfz4s.hYVE3zzBs6ueqnIs2XNv4APypzpLykg0Dk.3h5Fc0u','2024-05-31 15:33:19'),(12,'ralk9','Rafał','raflk@raflk.pl','$2a$10$hAA1N3I05tluw/OWZ3o4JOZwIisj1hfKT0L8HRAon7gBUitP4nGUq','2024-06-01 10:09:39'),(13,'dash78','Rafał','dsaa@dfadsa.pl','$2a$10$AzSR5MJ0q863lSxer9bsC.1n6sRXxQRbnGKnBTnVP//9PmMMG.dAu','2024-06-01 13:51:38'),(14,'saasd','Radfal','sdasd@dsadsa.pl','$2a$10$RauDjYq5PS.4LEWLXYtJP.lknh0BR8Rdch4sbxgNE1/eSO1NerN1C','2024-06-01 14:04:53'),(15,'andrzej','Andrzej','andrzej@andrzej2.pl','$2a$10$z5VKK5TV88z30DGkWveDg.LlHC3cKRCiPsznAxXsOgkgt1x5WKlIW','2024-06-05 12:14:43'),(16,'rala1','Rafał','rafal@dasdsa.pl','$2a$10$E8L4TRbjWtujHZZLAYmUluD5g5RX/SxxoXQtfJudVBTbo8oxYXDYq','2024-06-15 10:17:16');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-15 16:30:17
