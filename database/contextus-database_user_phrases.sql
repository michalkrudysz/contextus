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
-- Table structure for table `user_phrases`
--

DROP TABLE IF EXISTS `user_phrases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_phrases` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `phrase` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `translation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` int NOT NULL,
  `source` enum('AI','manual') COLLATE utf8mb4_unicode_ci NOT NULL,
  `repetitions` int DEFAULT '0',
  `last_review_date` date DEFAULT NULL,
  `review_interval` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_phrases_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `user_phrases_chk_1` CHECK (((`level` >= 1) and (`level` <= 6)))
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_phrases`
--

LOCK TABLES `user_phrases` WRITE;
/*!40000 ALTER TABLE `user_phrases` DISABLE KEYS */;
INSERT INTO `user_phrases` VALUES (1,1,'What is your name?','Jak masz na imię?',3,'manual',7,'2024-06-13',7),(2,1,'What is your name?','Jak masz na imię?',4,'manual',3,'2024-06-13',14),(3,1,'Where are you from?','Skąd jesteś?',2,'manual',16,'2024-06-15',2),(4,1,'I like to read books.','Lubię czytać książki.',2,'manual',11,'2024-06-15',2),(5,1,'Can I have a glass of water, please?','Czy mogę prosić o szklankę wody?',2,'manual',10,'2024-06-15',2),(6,1,'I need help with my homework.','Potrzebuję pomocy w zadaniu domowym.',2,'manual',8,'2024-06-15',2),(7,1,'sdaasddas','sdaasdasd',1,'manual',4,'2024-06-15',1),(8,1,'saddsadas','asdasddas',1,'manual',3,'2024-06-15',1),(9,1,'What a pity!','Co za szkoda',1,'manual',2,'2024-06-15',1),(10,1,'Will you put the groceries away when you get home?','Czy położysz zakupy, gdy wrócisz do domu?',1,'manual',2,'2024-06-15',1),(11,1,'She never puts off till tomorrow what she can do today.','Ona nigdy nie odkłada na jutro tego, co może zrobić dzisiaj.',1,'manual',2,'2024-06-15',1),(12,1,'Put your shoes in the closet before you trip over them.','Połóż swoje buty do szafy, zanim się o nie potkniesz.',1,'manual',2,'2024-06-15',1),(13,1,'Will you put the dishes away after dinner?','Czy po obiedzie położysz naczynia?',1,'manual',2,'2024-06-15',1),(14,1,'Have you ever experienced true love?','Czy kiedykolwiek doświadczyłeś prawdziwej miłości?',1,'manual',1,'2024-06-15',1),(15,1,'Will you promise to always love me no matter what?','Czy obiecasz, że zawsze będziesz mnie kochać, bez względu na wszystko?',1,'manual',1,'2024-06-15',1),(16,1,'I cannot imagine a world without love.','Nie potrafię wyobrazić sobie świata bez miłości.',1,'manual',1,'2024-06-15',1),(17,1,'We will travel to Paris next summer to celebrate our love.','W przyszłe lato pojademy do Paryża, aby świętować naszą miłość.',1,'manual',1,'2024-06-15',1),(18,1,'Will you ever find true love?','Czy kiedykolwiek znajdziesz prawdziwą miłość?',1,'manual',1,'2024-06-15',1),(19,1,'Trying new foods can greatly enhance your culinary experiences.','Próbowanie nowych potraw może znacząco wzbogacić twoje doświadczenia kulinarne.',1,'manual',1,'2024-06-15',1),(20,1,'We have plans to enhance our customer experience through better service.','Mamy plany, aby zwiększyć doświadczenie naszych klientów poprzez lepszą obsługę.',1,'manual',0,'2024-06-15',1),(21,1,'Andrzej','dassdaasdasdasd',1,'manual',0,'2024-06-15',1),(22,1,'We will enhance our skills through continuous training and practice.','Poprawimy nasze umiejętności poprzez ciągłe szkolenia i praktykę.',1,'manual',0,'2024-06-15',1),(23,1,'The company is implementing new strategies to enhance customer satisfaction.','Firma wprowadza nowe strategie, aby zwiększyć zadowolenie klientów.',1,'manual',0,'2024-06-15',1),(24,1,'What will you do to enhance your performance in the upcoming competition?','Co zrobisz, aby poprawić swoje osiągnięcia w nadchodzącym konkursie?',1,'manual',0,'2024-06-15',1);
/*!40000 ALTER TABLE `user_phrases` ENABLE KEYS */;
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
