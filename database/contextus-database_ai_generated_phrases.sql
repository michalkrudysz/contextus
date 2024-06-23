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
-- Table structure for table `ai_generated_phrases`
--

DROP TABLE IF EXISTS `ai_generated_phrases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ai_generated_phrases` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `phrase_pl` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phrase_en` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `generation_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `ai_generated_phrases_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=278 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ai_generated_phrases`
--

LOCK TABLES `ai_generated_phrases` WRITE;
/*!40000 ALTER TABLE `ai_generated_phrases` DISABLE KEYS */;
INSERT INTO `ai_generated_phrases` VALUES (73,NULL,'Często chodzę na siłownię w weekendy.','I often go to the gym on weekends.','2024-06-14 20:42:50'),(74,NULL,'Czy często będziesz odwiedzać swoich dziadków w trakcie lata?','Will you often visit your grandparents during the summer?','2024-06-14 20:42:50'),(75,NULL,'Ona nie je często fast foodów, ponieważ woli gotować w domu.','She doesn\'t often eat fast food because she prefers to cook at home.','2024-06-14 20:42:50'),(76,NULL,'Będziemy często podróżować do różnych krajów po przejściu na emeryturę.','We will often travel to different countries once we retire.','2024-06-14 20:42:50'),(77,NULL,'Czy zauważyłeś kiedykolwiek, jak często świeci słońce w tym mieście?','Have you ever noticed how often the sun shines in this city?','2024-06-14 20:42:50'),(78,1,'Często chodzę na spacer do parku w niedziele.','I often go for a walk in the park on Sundays.','2024-06-14 20:45:12'),(79,1,'Czy często widziałeś ten film wcześniej?','Have you often seen that movie before?','2024-06-14 20:45:12'),(80,1,'Często będziemy odwiedzać naszych dziadków podczas przerwy letniej.','We will often visit our grandparents during the summer break.','2024-06-14 20:45:12'),(81,1,'Ona rzadko je fast food, ponieważ woli domowe posiłki.','She doesn\'t often eat fast food because she prefers home-cooked meals.','2024-06-14 20:45:12'),(82,1,'Czy będą często podróżować do egzotycznych miejsc w przyszłości?','Will they often travel to exotic destinations in the future?','2024-06-14 20:45:12'),(83,1,'Często biegam w parku, żeby być aktywnym i zdrowym.','I often go running in the park to stay active and healthy.','2024-06-14 20:47:38'),(84,1,'Czy często będziesz odwiedzać rodzinę podczas świąt?','Will you often visit your family during the holidays?','2024-06-14 20:47:38'),(85,1,'Oni nie chodzą często jeść kolacji do restauracji, ponieważ wolą domowe posiłki.','They don\'t often go out to eat dinner at restaurants because they prefer home-cooked meals.','2024-06-14 20:47:38'),(86,1,'Będziemy często podróżować do różnych krajów, żeby doświadczyć nowych kultur i kuchni.','We will often travel to different countries to experience new cultures and cuisines.','2024-06-14 20:47:38'),(87,1,'Ona często wspominała o swoim marzeniu otwarcia własnej piekarni kiedyś.','She has often mentioned her dream of opening her own bakery one day.','2024-06-14 20:47:38'),(88,1,'Will anyone be joining us for the meeting except for John?','Except for the rain, the weather was perfect for a picnic.','2024-06-15 12:14:03'),(89,1,'Except for the fact that I don\'t have a car, I would have loved to go on a road trip.','I plan on cooking dinner tonight, except I don\'t have any groceries.','2024-06-15 12:14:03'),(90,1,'','We have everything we need for the party, except for the drinks.','2024-06-15 12:14:03'),(91,16,'Czy zabijanie innego istoty żywej jest etyczne?','Is it ethical to kill another living being?','2024-06-15 12:17:30'),(92,16,'Nigdy nie zabiję niewinnej istoty dla zabawy.','I will never kill an innocent creature for sport.','2024-06-15 12:17:30'),(93,16,'Czy kiedykolwiek zastanawiałeś się nad konsekwencjami zabicia kogoś?','Have you ever thought about the consequences of killing someone?','2024-06-15 12:17:30'),(94,16,'Musimy chronić zagrożone gatunki, aby zapobiec ich wymarciu.','We must protect endangered species to prevent their extinction.','2024-06-15 12:17:30'),(95,16,'Nie zabijaj, lecz raczej pielęgnuj i chronisz wszystkie formy życia na tej planecie.','Do not kill, but rather nurture and protect all forms of life on this planet.','2024-06-15 12:17:30'),(96,16,'Sdadas to moje ulubione słowo w języku angielskim.','Sdadas is my favorite word in the English language.','2024-06-15 12:29:30'),(97,16,'Czy kiedykolwiek słyszałeś to słowo \'sdadas\' wcześniej?','Have you ever heard the word \'sdadas\' before?','2024-06-15 12:29:30'),(98,16,'Nigdy nie zapomnę pierwszego razu, kiedy dowiedziałem się o znaczeniu \'sdadas\'.','I will never forget the first time I learned about the meaning of \'sdadas\'.','2024-06-15 12:29:30'),(99,16,'Czy sądzisz, że powinniśmy stworzyć tajny kod używając \'sdadas\' jako słowa kluczowego?','Do you think we should create a secret code using \'sdadas\' as a key word?','2024-06-15 12:29:30'),(100,16,'Obiecuję zawsze włączać \'sdadas\' w naszą przyszłą komunikację.','I promise to always include \'sdadas\' in our future communication.','2024-06-15 12:29:30'),(101,16,'Czy słyszałeś/-aś o nowej restauracji w mieście, sdadas?','Have you heard of the new restaurant in town, sdadas?','2024-06-15 12:31:55'),(102,16,'Nie będziemy mogli uczestniczyć w koncercie w przyszłym tygodniu z powodu sdadas.','We will not be able to attend the concert next week because of sdadas.','2024-06-15 12:31:55'),(103,16,'Nie zdawałem sobie sprawy, jak ważne jest sdadas, dopóki teraz.','I didn\'t realize how important sdadas was until now.','2024-06-15 12:31:55'),(104,16,'Jakie są twoje myśli na temat sdadas?','What are your thoughts on sdadas?','2024-06-15 12:31:55'),(105,16,'Jutro będziemy mieć wreszcie okazję odkryć sdadas.','Tomorrow, we will finally have the opportunity to explore sdadas.','2024-06-15 12:31:55'),(106,1,'Ona czuje się smutna po usłyszeniu wieści.','She feels sad after hearing the news.','2024-06-15 12:37:46'),(107,1,'Czy byłaś smutna, gdy się dowiedziałaś, że odchodzi?','Were you sad when you found out she was leaving?','2024-06-15 12:37:46'),(108,1,'Oni będą smutni, jeśli nie przyjdziesz na imprezę.','They will be sad if you don\'t come to the party.','2024-06-15 12:37:46'),(109,1,'Nie jestem smutny z powodu przegapienia okazji.','I am not sad about missing out on the opportunity.','2024-06-15 12:37:46'),(110,1,'Czy będzie smutna, jeśli nie dostanie awansu?','Will she be sad if she doesn\'t get the promotion?','2024-06-15 12:37:46'),(111,1,'Zawsze szukam sposobów na doskonalenie moich umiejętności i wiedzy.','I am always looking for ways to enhance my skills and knowledge.','2024-06-15 12:58:42'),(112,1,'Czy będziesz ulepszać swoją stronę internetową nowymi funkcjami w przyszłym roku?','Will you be enhancing your website with new features next year?','2024-06-15 12:58:42'),(113,1,'Nie ulepszyliśmy jeszcze wydajności naszych produktów tak bardzo, jak byśmy tego sobie życzyli.','We have not yet enhanced the performance of our products as much as we had hoped.','2024-06-15 12:58:42'),(114,1,'Oni planują ulepszyć obsługę klienta przez zatrudnienie większej liczby pracowników.','They are planning to enhance their customer service by hiring more staff.','2024-06-15 12:58:42'),(115,1,'Korzystając z tego nowego oprogramowania, możesz ulepszyć jakość swoich zdjęć.','By using this new software, you can enhance the quality of your photos.','2024-06-15 12:58:42'),(116,1,'Uwielbiam spędzać czas z moją rodziną.','I love spending time with my family.','2024-06-15 13:22:12'),(117,1,'Czy będziesz mnie kochać na zawsze?','Will you love me forever?','2024-06-15 13:22:12'),(118,1,'Będziemy kochać podróżować razem do nowych miejsc.','We will love traveling to new places together.','2024-06-15 13:22:12'),(119,1,'Ona nie kocha zimnej pogody.','She does not love the cold weather.','2024-06-15 13:22:12'),(120,1,'Czy kiedykolwiek kochałeś kogoś tak głęboko?','Have you ever loved someone so deeply?','2024-06-15 13:22:12'),(121,1,'Co to jest sdaasd i jak wpływa na nasze codzienne życie?','What is sdaasd and how does it impact our daily lives?','2024-06-15 13:23:35'),(122,1,'Nigdy nie słyszałem o sdaasd wcześniej, a ty?','I have never heard of sdaasd before, have you?','2024-06-15 13:23:35'),(123,1,'Czy sdaasd będzie odgrywał rolę w przyszłych technologiach?','Will sdaasd play a role in future technologies?','2024-06-15 13:23:35'),(124,1,'Nie martwmy się teraz o sdaasd, są bardziej pilne problemy do rozwiązania.','Let\'s not worry about sdaasd right now, there are more pressing issues to address.','2024-06-15 13:23:35'),(125,1,'Jeśli sdaasd nadal będzie sprawą do rozwiązania, powinniśmy poszukać porady ekspertów.','If sdaasd continues to be a concern, we should seek expert advice.','2024-06-15 13:23:35'),(126,1,'Czy słyszałeś o nowym sdaasd, który właśnie się pojawił?','Have you heard about the new sdaasd that just came out?','2024-06-15 13:23:36'),(127,1,'Jutro będę testować sdaasd, żeby zobaczyć, jak dobrze działa.','Tomorrow, I will be testing the sdaasd to see how well it works.','2024-06-15 13:23:36'),(128,1,'Nigdy wcześniej nie widziałem takiego sdaasd.','I have never seen sdaasd like this before.','2024-06-15 13:23:36'),(129,1,'Nie zamierzamy kupować tego sdaasd, ponieważ jest zbyt drogi.','We are not going to buy that sdaasd because it is too expensive.','2024-06-15 13:23:36'),(130,1,'Po przeanalizowaniu różnych opcji, w końcu znalazłem idealny sdaasd odpowiadający moim potrzebom.','After researching different options, I finally found the perfect sdaasd for my needs.','2024-06-15 13:23:36'),(131,1,'Miłość jest najpotężniejszą siłą we wszechświecie.','Love is the most powerful force in the universe.','2024-06-15 13:30:12'),(132,1,'Czy wierzysz w miłość od pierwszego wejrzenia?','Do you believe in love at first sight?','2024-06-15 13:30:12'),(133,1,'Podróżujemy razem po całym świecie, doświadczając miłości w każdym zakątku.','We will travel the world together, experiencing love in every corner.','2024-06-15 13:30:12'),(134,1,'Nie sądzę, że miłość może kiedykolwiek umrzeć.','I do not think love can ever truly die.','2024-06-15 13:30:12'),(135,1,'Czy kiedykolwiek poczułeś głęboką, przytłaczającą moc miłości?','Have you ever felt the deep, overwhelming power of love?','2024-06-15 13:30:12'),(136,1,'Miłość to potężna siła, która może zbliżyć ludzi.','Love is a powerful force that can bring people together.','2024-06-15 13:33:36'),(137,1,'Czy kiedykolwiek przestaniesz wierzyć w siłę miłości?','Will you ever stop believing in the power of love?','2024-06-15 13:33:36'),(138,1,'Planujemy odnowić nasze przyrzeczenia w przyszłym roku, aby uczcić naszą miłość.','We are planning to renew our vows next year to celebrate our love.','2024-06-15 13:33:36'),(139,1,'Miłość nie jest zawsze łatwa, ale zawsze warto.','Love is not always easy, but it is always worth it.','2024-06-15 13:33:36'),(140,1,'Oni nigdy nie doświadczyli prawdziwej miłości, dopóki się nie spotkali.','They have never experienced true love until they met each other.','2024-06-15 13:33:36'),(141,1,'Kocham spędzać czas z moją rodziną.','I love spending time with my family.','2024-06-15 13:35:37'),(142,1,'Czy kiedykolwiek przestaniesz mnie kochać?','Will you ever stop loving me?','2024-06-15 13:35:37'),(143,1,'Planujemy okazać naszą miłość poprzez czyny, nie tylko słowa.','We are planning to show our love through actions, not just words.','2024-06-15 13:35:37'),(144,1,'Oni nie wierzą w prawdziwą miłość.','They do not believe in true love.','2024-06-15 13:35:37'),(145,1,'W przyszłości znajdę kogoś, kogo pokocham głęboko.','In the future, I will find someone to love deeply.','2024-06-15 13:35:37'),(146,1,'How are you doing today?','Hello!','2024-06-15 13:38:28'),(147,1,'Jak się dzisiaj masz?','Cześć!','2024-06-15 13:38:28'),(148,1,'I will call you later.','Hello.','2024-06-15 13:38:28'),(149,1,'Zadzwonię do ciebie później.','Witaj.','2024-06-15 13:38:28'),(150,1,'Do you want to go out for dinner tomorrow?','Hello!','2024-06-15 13:38:28'),(151,1,'Chcesz pójść na kolację jutro?','Cześć!','2024-06-15 13:38:28'),(152,1,'I haven\'t seen you in a while.','Hello.','2024-06-15 13:38:28'),(153,1,'Nie widziałem cię od dłuższego czasu.','Witaj.','2024-06-15 13:38:28'),(154,1,'I won\'t be able to meet you for lunch today.','Hello!','2024-06-15 13:38:28'),(155,1,'Nie będę dzisiaj mógł z tobą spotkać się na lunch.','Cześć!','2024-06-15 13:38:28'),(156,1,'Załóż buty przed wyjściem na zewnątrz.','Put your shoes on before going outside.','2024-06-15 13:40:23'),(157,1,'Czy już odłożyłeś zakupy?','Did you put the groceries away yet?','2024-06-15 13:40:23'),(158,1,'Postawimy namiot w ogrodzie na wyjazd na biwak.','We will put up a tent in the backyard for the camping trip.','2024-06-15 13:40:23'),(159,1,'Nie powinienem był odkładać nauki do egzaminu na ostatnią chwilę.','I should not have put off studying for the exam until the last minute.','2024-06-15 13:40:23'),(160,1,'Odłóżmy nasze różnice na bok i wspólnie pracujmy nad wspólnym celem.','Let\'s put our differences aside and work together towards a common goal.','2024-06-15 13:40:23'),(161,1,'Dzisiaj rano położyłem swoje klucze na stole.','I put my keys on the table this morning.','2024-06-15 13:40:24'),(162,1,'Czy położysz zakupy, gdy wrócisz do domu?','Will you put the groceries away when you get home?','2024-06-15 13:40:24'),(163,1,'Planujemy postawić nowy płot w ogrodzie za miesiąc.','We plan to put up a new fence in the backyard next month.','2024-06-15 13:40:24'),(164,1,'Ona nigdy nie kładzie swoich potrzeb ponad innych.','She never puts her needs before others.','2024-06-15 13:40:24'),(165,1,'Nie zwlekaj do jutra tego, co możesz zrobić dzisiaj.','Don\'t put off till tomorrow what you can do today.','2024-06-15 13:40:24'),(166,1,'Czy wierzysz w miłość od pierwszego wejrzenia?','Do you believe in love at first sight?','2024-06-15 13:41:35'),(167,1,'Zawsze lubiłem spędzać czas z Tobą.','I have always loved spending time with you.','2024-06-15 13:41:35'),(168,1,'Będziemy kochać się do końca czasu.','We will love each other until the end of time.','2024-06-15 13:41:35'),(169,1,'Nie sądzę, że powinniśmy spieszyć się z czymś poważnym.','I don\'t think we should rush into anything serious.','2024-06-15 13:41:35'),(170,1,'Czy możesz nauczyć mnie, jak pokochać siebie?','Can you teach me how to love myself?','2024-06-15 13:41:35'),(171,1,'Miłość jest najpotężniejszą emocją na świecie.','Love is the most powerful emotion in the world.','2024-06-15 13:41:37'),(172,1,'Czy kiedykolwiek doświadczyłeś prawdziwej miłości?','Have you ever experienced true love before?','2024-06-15 13:41:37'),(173,1,'Zawsze znajdziemy sposób, aby okazać sobie nawzajem miłość.','We will always find a way to show our love for each other.','2024-06-15 13:41:37'),(174,1,'Nie potrafię wyobrazić sobie życia bez miłości.','I can\'t imagine a life without love.','2024-06-15 13:41:37'),(175,1,'Obiecujesz, że będziesz mnie kochać na zawsze?','Will you promise to love me forever?','2024-06-15 13:41:37'),(176,1,'Miłość to wspaniałe uczucie, które przynosi radość i szczęście do naszego życia.','Love is a wonderful feeling that brings joy and happiness to our lives.','2024-06-15 13:41:38'),(177,1,'Czy wierzysz w prawdziwą miłość, która trwa przez całe życie?','Do you believe in true love that lasts a lifetime?','2024-06-15 13:41:38'),(178,1,'Będziemy razem podróżować po świecie, poznawać nowe miejsca i tworzyć niezapomniane wspomnienia.','We will travel the world together, exploring new places and creating unforgettable memories.','2024-06-15 13:41:38'),(179,1,'Nie potrafię sobie wyobrazić mojego życia bez miłości i wsparcia mojej rodziny i przyjaciół.','I cannot imagine my life without the love and support of my family and friends.','2024-06-15 13:41:38'),(180,1,'Nawet w najciemniejszych chwilach, miłość ma moc rozświetlić nasze życie i dać nadzieję na lepsze jutro.','Even in the darkest times, love has the power to light up our lives and bring hope for a better tomorrow.','2024-06-15 13:41:38'),(181,1,'Miłość to piękne uczucie, które przynosi radość i szczęście.','Love is a beautiful feeling that brings joy and happiness.','2024-06-15 13:45:44'),(182,1,'Czy kiedykolwiek doświadczyłeś prawdziwej miłości?','Have you ever experienced true love before?','2024-06-15 13:45:44'),(183,1,'Razem będziemy podróżować po całym świecie i doświadczyć miłości w każdym zakątku globu.','We will travel the world together and experience love in every corner of the globe.','2024-06-15 13:45:44'),(184,1,'Nigdy nie przestanę cię kochać, bez względu na to, co się stanie.','I will never stop loving you, no matter what happens.','2024-06-15 13:45:44'),(185,1,'Miłość pokonuje wszystkie przeszkody i sprawia, że życie jest warte przeżycia.','Love conquers all obstacles and makes life worth living.','2024-06-15 13:45:44'),(186,1,'Załóż buty przed wyjściem na zewnątrz.','Put your shoes on before you go outside.','2024-06-15 13:49:01'),(187,1,'Czy włożyłeś zakupy do spiżarni?','Did you put the groceries away in the pantry?','2024-06-15 13:49:01'),(188,1,'Postawimy choinkę w przyszły weekend.','We will put up the Christmas tree next weekend.','2024-06-15 13:49:01'),(189,1,'Nie chcę już dodawać więcej cukru do kawy.','I don\'t want to put any more sugar in my coffee.','2024-06-15 13:49:01'),(190,1,'Oni włożyli dużo wysiłku w organizację tego wydarzenia.','They have put a lot of effort into organizing this event.','2024-06-15 13:49:01'),(191,1,'Can you put the groceries away?','Put your bag on the table.','2024-06-15 13:50:16'),(192,1,'I don\'t want to put off studying any longer.','I will put on my coat before we leave.','2024-06-15 13:50:16'),(193,1,'W ten weekend posadzę nowe kwiaty w ogrodzie.','I will put new flowers in the garden this weekend.','2024-06-15 13:51:13'),(194,1,'Czy położyłeś zakupy do spiżarni?','Did you put the groceries away in the pantry?','2024-06-15 13:51:13'),(195,1,'Nigdy nie poświęcałem tak wiele uwagi temu pomysłowi.','I have never put much thought into that idea before.','2024-06-15 13:51:13'),(196,1,'Powinniśmy odłożyć na bok nasze różnice i wspólnie pracować.','We should put our differences aside and work together.','2024-06-15 13:51:13'),(197,1,'Oni nie będą tolerować takiego zachowania już dłużej.','They will not put up with that kind of behavior any longer.','2024-06-15 13:51:13'),(198,1,'Położyłem swoje klucze na stole.','I put my keys on the table.','2024-06-15 13:51:15'),(199,1,'Czy odłożyłeś zakupy?','Did you put the groceries away?','2024-06-15 13:51:15'),(200,1,'Postawimy namiot w ogrodzie na wypad na biwak.','We will put up a tent in the yard for the camping trip.','2024-06-15 13:51:15'),(201,1,'Ona nigdy nie wkłada wysiłku w swoją pracę.','She never puts any effort into her work.','2024-06-15 13:51:15'),(202,1,'Oni zakładali swoje płaszcze gdy zadzwonił dzwonek.','They were putting on their coats when the doorbell rang.','2024-06-15 13:51:15'),(203,1,'Dzisiaj rano położyłem swoje klucze na blat kuchenny.','I put my keys on the kitchen counter this morning.','2024-06-15 13:56:30'),(204,1,'Czy zapomniałeś włożyć buty do szafy?','Did you forget to put your shoes in the closet?','2024-06-15 13:56:30'),(205,1,'Postawimy namiot i rozpalimy ognisko na naszą wyprawę campingową w przyszły weekend.','We will put up a tent and make a campfire for our camping trip next weekend.','2024-06-15 13:56:30'),(206,1,'Ona nigdy nie dodaje cukru do swojej kawy, bo lubi ją czarną.','She never puts sugar in her coffee because she likes it black.','2024-06-15 13:56:30'),(207,1,'Jeśli nie włożysz wysiłku, nie zobaczysz rezultatów.','If you don\'t put in the effort, you won\'t see the results.','2024-06-15 13:56:30'),(208,1,'Położę książki na półce.','I will put the books on the shelf.','2024-06-15 13:57:08'),(209,1,'Czy położyłeś klucze z powrotem tam, gdzie należy?','Did you put the keys back where they belong?','2024-06-15 13:57:08'),(210,1,'Nie powinniśmy odkładać tego spotkania na później.','We should not put off this meeting any longer.','2024-06-15 13:57:08'),(211,1,'Czy zamierzasz zawiesić nowe zasłony w salonie?','Are you going to put up the new curtains in the living room?','2024-06-15 13:57:09'),(212,1,'Ona nigdy nie stawia innych przed sobą, zawsze myśli w pierwszej kolejności o swoich potrzebach.','She never puts others before herself, always thinking of her own needs first.','2024-06-15 13:57:09'),(213,1,'Dzisiaj rano położyłam moje klucze na blacie kuchennym.','I put my keys on the kitchen counter this morning.','2024-06-15 13:57:41'),(214,1,'Czy położyłeś zakupy do spiżarni?','Did you put the groceries away in the pantry?','2024-06-15 13:57:41'),(215,1,'Postawimy namiot w ogrodzie na nasz wyjazd na kemping w przyszły weekend.','We will put up a tent in the backyard for our camping trip next weekend.','2024-06-15 13:57:41'),(216,1,'Ona nigdy nie stawia swoich potrzeb ponad potrzeby innych.','She never puts her needs before others.','2024-06-15 13:57:41'),(217,1,'Oni nie będą dłużej tolerować twojego zachowania.','They will not put up with your behavior any longer.','2024-06-15 13:57:41'),(218,1,'Położyłem swoje klucze na stole przed wyjściem.','I put my keys on the table before leaving.','2024-06-15 14:00:07'),(219,1,'Czy położysz zakupy, gdy wrócisz do domu?','Will you put the groceries away when you get home?','2024-06-15 14:00:07'),(220,1,'Oni wystawiają sztukę podczas corocznego talent show szkolnego.','They are putting on a play for the school\'s annual talent show.','2024-06-15 14:00:07'),(221,1,'Postawimy namiot w ogródku na wyjazd na camping w przyszły weekend.','We will put up a tent in the backyard for the camping trip next weekend.','2024-06-15 14:00:07'),(222,1,'Ona nigdy nie odkłada na jutro tego, co może zrobić dzisiaj.','She never puts off till tomorrow what she can do today.','2024-06-15 14:00:07'),(223,1,'Połóż swoje buty do szafy, zanim się o nie potkniesz.','Put your shoes in the closet before you trip over them.','2024-06-15 14:10:23'),(224,1,'Czy po obiedzie położysz naczynia?','Will you put the dishes away after dinner?','2024-06-15 14:10:23'),(225,1,'Postawię namiot w ogrodzie na nadchodzacy weekendowy wycieczkę.','I will put up a tent in the backyard for the camping trip next weekend.','2024-06-15 14:10:23'),(226,1,'Nie włożyli wiele wysiłku w projekt, więc wyniki były rozczarowujące.','They did not put much effort into the project, so the results were disappointing.','2024-06-15 14:10:23'),(227,1,'Nałóż na skórę trochę kremu z filtrem, aby zapobiec oparzeniom słonecznym.','Put some sunscreen on your skin to prevent sunburn.','2024-06-15 14:10:23'),(228,1,'Miłość to piękne uczucie, które sprawia, że życie jest warte życia.','Love is a beautiful feeling that makes life worth living.','2024-06-15 14:13:15'),(229,1,'Czy kiedykolwiek doświadczyłeś prawdziwej miłości?','Have you ever experienced true love?','2024-06-15 14:13:15'),(230,1,'Będziemy razem podróżować po świecie, poznając nowe kultury i tworząc wspomnienia, które przetrwają całe życie.','We will travel the world together, exploring new cultures and making memories that will last a lifetime.','2024-06-15 14:13:15'),(231,1,'Miłość nie zna granic i przekracza wszelkie bariery.','Love knows no boundaries and transcends all barriers.','2024-06-15 14:13:15'),(232,1,'Nie wierzę, że ktokolwiek może prowadzić pełne życie bez doświadczenia miłości.','I do not believe that anyone can live a fulfilling life without experiencing love.','2024-06-15 14:13:15'),(233,1,'Połóż buty na stojaku na buty.','Put your shoes on the shoe rack.','2024-06-15 15:03:56'),(234,1,'Czy położyłeś swoje naczynia do zmywarki?','Did you put your dishes in the dishwasher?','2024-06-15 15:03:56'),(235,1,'Postawimy namiot na biwaku w przyszły weekend.','We will put up a tent for camping next weekend.','2024-06-15 15:03:56'),(236,1,'Nie mogłem odłożyć książki, gdy tylko zacząłem czytać.','I couldn\'t put the book down once I started reading it.','2024-06-15 15:03:56'),(237,1,'Odłóżmy na bok nasze różnice i pracujmy razem.','Let\'s put our differences aside and work together.','2024-06-15 15:03:56'),(238,1,'Czy możesz położyć książkę na półce?','Can you put the book on the shelf?','2024-06-15 15:06:11'),(239,1,'Po obiedzie położę naczynia.','I will put the dishes away after dinner.','2024-06-15 15:06:11'),(240,1,'Oni nigdy nie wkładają wysiłku w swoją pracę.','They never put any effort into their work.','2024-06-15 15:06:11'),(241,1,'Czy zamierzasz położyć nową tapetę w sypialni?','Are you going to put up new wallpaper in your bedroom?','2024-06-15 15:06:11'),(242,1,'Nie zapomnijmy wyrzucić śmieci przed pójściem spać.','Let\'s not forget to put the garbage out before bed.','2024-06-15 15:06:11'),(243,1,'Miłość jest najpotężniejszą siłą we wszechświecie.','Love is the most powerful force in the universe.','2024-06-15 15:18:47'),(244,1,'Czy kiedykolwiek doświadczyłeś prawdziwej miłości?','Have you ever experienced true love?','2024-06-15 15:18:47'),(245,1,'W przyszłe lato pojademy do Paryża, aby świętować naszą miłość.','We will travel to Paris next summer to celebrate our love.','2024-06-15 15:18:47'),(246,1,'Nie potrafię wyobrazić sobie świata bez miłości.','I cannot imagine a world without love.','2024-06-15 15:18:47'),(247,1,'Czy obiecasz, że zawsze będziesz mnie kochać, bez względu na wszystko?','Will you promise to always love me no matter what?','2024-06-15 15:18:47'),(248,1,'Kocham spędzać czas z moją rodziną.','I love spending time with my family.','2024-06-15 15:19:21'),(249,1,'Czy kiedykolwiek znajdziesz prawdziwą miłość?','Will you ever find true love?','2024-06-15 15:19:21'),(250,1,'Planujemy podróżować razem po świecie w przyszłym roku.','We are planning to travel the world together next year.','2024-06-15 15:19:21'),(251,1,'Ona nie wierzy w miłość od pierwszego wejrzenia.','She doesn\'t believe in love at first sight.','2024-06-15 15:19:21'),(252,1,'Zawsze będą się kochać, bez względu na to, co się wydarzy.','They will always love each other, no matter what happens.','2024-06-15 15:19:21'),(253,1,'Czy szukasz sposobów na poprawę swoich umiejętności pisarskich?','Are you looking for ways to enhance your skills as a writer?','2024-06-15 15:22:08'),(254,1,'W przyszłym miesiącu będę brał kurs, aby rozszerzyć moją wiedzę z zakresu marketingu.','I will take a course next month to enhance my knowledge in marketing.','2024-06-15 15:22:08'),(255,1,'Oni nie wprowadzili potrzebnych zmian, aby poprawić bezpieczeństwo w miejscu pracy.','They have not implemented the necessary changes to enhance workplace safety.','2024-06-15 15:22:08'),(256,1,'Ona uważa, że regularne ćwiczenia są niezbędne do poprawy sprawności fizycznej.','She believes that regular exercise is essential to enhance physical fitness.','2024-06-15 15:22:08'),(257,1,'Jakie kroki możemy podjąć, aby poprawić jakość naszej obsługi klienta?','What steps can we take to enhance the quality of our customer service?','2024-06-15 15:22:08'),(258,1,'Próbowanie nowych potraw może znacząco wzbogacić twoje doświadczenia kulinarne.','Trying new foods can greatly enhance your culinary experiences.','2024-06-15 15:23:05'),(259,1,'Czy podnoszenie swoich umiejętności przyczyni się do większej liczby możliwości zawodowych?','Will enhancing your skills lead to more job opportunities?','2024-06-15 15:23:05'),(260,1,'Obecnie nie planujemy poszerzać naszej linii produktów.','We are not currently planning to enhance our product line.','2024-06-15 15:23:05'),(261,1,'Ona ciężko pracuje nad rozwinięciem swoich talentów artystycznych.','She has been working hard to enhance her artistic talents.','2024-06-15 15:23:05'),(262,1,'W przyszłości mamy nadzieję ulepszać nasze usługi klientom za pomocą nowych programów szkoleniowych.','In the future, we hope to enhance our customer service with new training programs.','2024-06-15 15:23:05'),(263,1,'Popraw swoje umiejętności, biorąc udział w kursach online.','Enhance your skills by taking online courses.','2024-06-15 15:23:13'),(264,1,'Czy zwiększysz swoją produktywność, przekazując zadania innym?','Will you enhance your productivity by delegating tasks to others?','2024-06-15 15:23:13'),(265,1,'Mamy plany, aby zwiększyć doświadczenie naszych klientów poprzez lepszą obsługę.','We have plans to enhance our customer experience through better service.','2024-06-15 15:23:13'),(266,1,'Oni nie chcą poprawić projektu swojej strony internetowej.','They do not want to enhance their website design.','2024-06-15 15:23:13'),(267,1,'Jak możemy ulepszyć komunikację w naszym zespole?','How can we enhance communication within our team?','2024-06-15 15:23:13'),(268,1,'Jak możemy poprawić jakość tego projektu?','How can we enhance the quality of this project?','2024-06-15 15:26:31'),(269,1,'Poprawimy nasze umiejętności poprzez ciągłe szkolenia i praktykę.','We will enhance our skills through continuous training and practice.','2024-06-15 15:26:31'),(270,1,'Oni nie podjęli żadnych wysiłków, aby poprawić swoje działania biznesowe.','They have not made any efforts to enhance their business operations.','2024-06-15 15:26:31'),(271,1,'Co zrobisz, aby poprawić swoje osiągnięcia w nadchodzącym konkursie?','What will you do to enhance your performance in the upcoming competition?','2024-06-15 15:26:31'),(272,1,'Firma wprowadza nowe strategie, aby zwiększyć zadowolenie klientów.','The company is implementing new strategies to enhance customer satisfaction.','2024-06-15 15:26:31'),(273,1,'Chodźmy do parku i cieszmy się piękną pogodą.','Let\'s go to the park and enjoy the beautiful weather.','2024-06-15 15:45:11'),(274,1,'Pozwól mi pomóc ci z pracą domową po kolacji.','Let me help you with your homework after dinner.','2024-06-15 15:45:11'),(275,1,'Nie zapomnijmy kupić mleka po drodze do domu.','Let\'s not forget to buy some milk on our way home.','2024-06-15 15:45:11'),(276,1,'Zaplanujmy wypad nad morze w przyszłe lato.','Let\'s plan a trip to the beach next summer.','2024-06-15 15:45:11'),(277,1,'Pozwól im pobawić się na zewnątrz, pod warunkiem, że najpierw skończą swoje obowiązki.','Let them play outside as long as they finish their chores first.','2024-06-15 15:45:11');
/*!40000 ALTER TABLE `ai_generated_phrases` ENABLE KEYS */;
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