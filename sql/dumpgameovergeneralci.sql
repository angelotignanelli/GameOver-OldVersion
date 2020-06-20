-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: gameover
-- ------------------------------------------------------
-- Server version	8.0.20

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
-- Table structure for table `cart_game`
--

DROP TABLE IF EXISTS `cart_game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_game` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cart_id` int DEFAULT NULL,
  `games_id` int DEFAULT NULL,
  `price` decimal(2,0) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_game`
--

LOCK TABLES `cart_game` WRITE;
/*!40000 ALTER TABLE `cart_game` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `estado` varchar(45) DEFAULT NULL,
  `users_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Accion'),(2,'Aventura'),(3,'Deporte'),(4,'Horror'),(5,'Supervivencia');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distributors`
--

DROP TABLE IF EXISTS `distributors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `distributors` (
  `id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distributors`
--

LOCK TABLES `distributors` WRITE;
/*!40000 ALTER TABLE `distributors` DISABLE KEYS */;
INSERT INTO `distributors` VALUES (1,'Kojima Productions'),(2,'Electronic Arts'),(3,'Capcom'),(4,'Sony IE'),(5,'2K Games'),(6,'Ubisoft'),(7,'Bethesda Softworks'),(8,'Square Enix'),(9,'Rockstar Games'),(10,'NAMCOM BANDAI');
/*!40000 ALTER TABLE `distributors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_platform`
--

DROP TABLE IF EXISTS `game_platform`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game_platform` (
  `id` int NOT NULL,
  `game_id` int DEFAULT NULL,
  `platform_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `platform_game_id_idx` (`platform_id`),
  KEY `game_platform_id_idx` (`game_id`),
  CONSTRAINT `game_platform_id` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`),
  CONSTRAINT `platform_game_id` FOREIGN KEY (`platform_id`) REFERENCES `platforms` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_platform`
--

LOCK TABLES `game_platform` WRITE;
/*!40000 ALTER TABLE `game_platform` DISABLE KEYS */;
INSERT INTO `game_platform` VALUES (1,1,1),(2,2,1),(3,2,2),(4,2,3),(5,3,1),(6,3,2),(7,3,3),(8,4,1),(9,5,1),(10,5,2),(11,5,3),(12,6,1),(13,7,1),(14,8,1),(15,8,2),(16,8,3),(17,9,1),(18,9,2),(19,9,3),(20,10,1),(21,11,1),(22,11,2),(23,11,3),(24,12,1),(25,13,1),(26,13,2),(27,13,3),(28,14,1),(29,14,2),(30,15,1);
/*!40000 ALTER TABLE `game_platform` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `logo` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `video` varchar(100) DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `age_clasification` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `distributor_id` int DEFAULT NULL,
  `section_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id_idx` (`category_id`),
  KEY `distributor_id_idx` (`distributor_id`),
  KEY `section_id_idx` (`section_id`),
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `distributor_id` FOREIGN KEY (`distributor_id`) REFERENCES `distributors` (`id`),
  CONSTRAINT `section_id` FOREIGN KEY (`section_id`) REFERENCES `sections` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (1,'Death Stranding','dsl.png','El mundo ha caído bajo el dominio de Shinra Electric Power Company una siniestra corporación que controla la energía mako, la fuente de vida del planeta. En la extensa ciudad de Midgar, una organización antishinra autodenominada Avalancha ha iniciado la resistencia.Cloud Strife, un exmiembro de la unidad de elite SOLDADO de Shinra devenido mercenario','deathst.jpg','https://www.youtube.com/embed/FdzSLU3Ze7w',20,'2019-11-08',18,3996,5,1,1),(2,'FIFA 20','fifa20.png','FIFA 20 es la nueva edición de la saga de simulación deportiva de EA Sports, y la séptima entrega de la serie en la generación de consolas encabezada por Xbox One y PlayStation 4, así como por Nintendo Switch. Es la entrega más completa, ambiciosa y variada de FIFA en la última década, incluyendo modos rompedores como VOLTA Football.\n\n','fifa.jpg','https://www.youtube.com/embed/Wmhq0sGRuPU',20,'2019-09-27',3,5000,3,2,1),(3,'Resident Evil 2','r2.png','La trama transcurre en Raccoon City, una ciudad estadounidense cuya población en su mayoría ha sido transformada en zombi por el virus-T, un arma biológica desarrollada por la compañía Umbrella.','r2.jpg','https://www.youtube.com/embed/XPWY-71aZL',20,'2019-01-25',18,4000,4,3,1),(4,'The Last of Us 2','tlou2.png','The Last of Us: Part II es un próximo videojuego de acción-aventura desarrollado por Naughty Dog y publicado por Sony. Su lanzamiento está programado para el 19 de junio de 2020','tlof2.jpg','https://www.youtube.com/embed/VSLSvEjDm5s',0,'2020-06-19',18,6999,5,4,1),(5,'Borderlands 3','bl3.png','Borderlands 3​ es un videojuego de disparos en primera persona con elementos de rol, se trata de la secuela del videojuego de 2012, Borderlands 2. Fue desarrollado por Gearbox Software y distribuido por 2K Games para las plataformas Google Stadia, Microsoft Windows, PlayStation 4, Xbox One y Pc','b3.jpg','https://www.youtube.com/embed/caIE6CYzoA4',20,'2019-09-21',16,3500,1,5,2),(6,'Marvel\'s Spiderman','spide.png','Marvel\'s Spider-Man o simplemente Spider-Man (en Latinoamérica Spider-Man de Marvel), es una serie de televisión animada de acción-aventura, de ciencia ficción basada en los cómics de Spider-Man creados por Stan Lee y Steve Ditko. Reemplazo de la serie anterior Ultimate Spider-Man, siendo ahora un reinicio. Se estrenó el 19 de agosto de 2017 en Disney XD. y Cartoon Network Se estrenó el 12 de abril de 2019','spide.jpg','https://www.youtube.com/embed/K4zm30yeHHE',20,'2018-09-07',16,3000,1,4,2),(7,'Uncharted 4','unchar4.png','Uncharted 4: El desenlace del ladrón, es un videojuego de acción-aventura en tercera persona, lanzado el 10 de mayo de 2016, distribuido por Sony Computer Entertainment y desarrollado por Naughty Dog exclusivamente para PlayStation 4','uncharted.jpg','https://www.youtube.com/embed/hh5HV4iic1Y',20,'2016-05-02',16,2000,2,4,2),(8,'Assasin\'s Creed Odyssey','assa.png','Assassin\'s Creed Odyssey es un videojuego desarrollado por Ubisoft Quebec y publicado por Ubisoft. Es el decimoprimer juego de mayor importancia y el vigesimoprimero en general dentro de la saga Assassin\'s Creed, siendo posterior al juego Assassin\'s Creed Orígins, se trataría de una precuela','ass.jpg','https://www.youtube.com/embed/Asy_p4xStbk',20,'2018-10-05',18,3000,2,6,2),(9,'Doom Eternal','doom.png','Doom Eternal es un videojuego de acción y disparos en primera persona desarrollado por id Software y publicado por Bethesda Softworks.​ Es el quinto título principal de la serie Doom y la secuela directa del juego estrenado en 2016','doom.jpg','https://www.youtube.com/embed/YNpYpW5bbYk',20,'2020-03-20',18,8000,1,7,3),(10,'Final Fantasy 7 Remake',NULL,'La historia sigue al mercenario Cloud Strife mientras él y el grupo eco-terrorista AVALANCHE luchan contra la corrupta megacorporación de Shinra y el legendario exsoldado de Shinra Sefirot. El videojuego combina la acción en tiempo real similar a Dissidia Final Fantasy con otros elementos estratégicos.','ff.jpg','https://www.youtube.com/watch?v=ERgrFVhL-n4',20,'2020-04-10',16,6000,4,8,3),(11,'GTA 5',NULL,'El juego está ambientado en la ciudad ficticia de Los Santos, así como en las zonas que la rodean, basada en la ciudad de Los Ángeles y el sur de California. La ciudad también era la ambientación del anterior juego GTA:San Andreas. Por primera vez el juego se centraría en tres personajes distintos en vez de uno solo: Michael, Trevor y Franklin, además del personaje que el jugador utiliza en el modo en línea.','gtav.jpg','https://www.youtube.com/watch?v=hvoD7ehZPcM',20,'2013-09-17',18,1500,1,9,3),(12,'God of War',NULL,'God of War transcurre en una versión alternativa de la Antigua Grecia, donde existen seres mitológicos como los dioses o los titanes. Con la excepción de flashbacks, los hechos transcurren entre los juegos Chains of Olympus (2008) y Ghost of Sparta (2010). Hay seis localizaciones a explorar, siendo reales el Mar Egeo o la ciudad de Atenas y ficticias el Desierto de las Almas Perdidas, el Templo de Pandora, el Inframundo y una pequeña escena en el Monte Olimpo.','gow2.jpg','https://www.youtube.com/watch?v=dK42JGgkoF8',20,'2018-04-18',18,2000,2,4,3),(13,'Read Dead Redemption 2',NULL,'Al igual que la primera entrega, Red Dead Redemption 2 es un juego de acción y aventura, jugado tanto como primera como tercera persona, ambientado en el lejano oeste estadounidense y desarrollado en un entorno de mundo abierto con una versión ficticia del oeste, el medio oeste y el sur de los Estados Unidos en 1899, durante la segunda mitad de la era del Salvaje Oeste y el final de la era, a comienzos del siglo XX.','rd2.jpg','https://www.youtube.com/watch?v=eaW0tYpxyp0',20,'2018-10-26',18,4000,2,9,3),(14,'UFC 3',NULL,'EA Sports UFC 3 es la nueva entrega del simulador de lucha y combate de artes marciales mixtas. ... Cuenta con una tecnología revolucionaria, Real Player Motion (RPM), un nuevo tipo de animación que ofrece la jugabilidad más fluida de la serie, con transiciones más realistas y creíbles en los combates.',NULL,'https://www.youtube.com/watch?v=s0Xe1ggWDUI',20,'2010-01-06',18,2500,3,2,3),(15,'Dragon Ball Kakaroto','dbz.png','Dragon Ball Z: Kakarot cubre la historia de Goku y los Guerreros Z, controlados por el jugador, a través de diferentes eventos icónicos en la historia de Dragon Ball Z, que van desde el comienzo de la Saga Saiyan hasta el final de la Saga Majin Buu.','dbz.jpg','https://www.youtube.com/embed/cL0roSDy_pU',20,'2018-09-17',18,329,1,10,3);
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `platforms`
--

DROP TABLE IF EXISTS `platforms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `platforms` (
  `id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `platforms`
--

LOCK TABLES `platforms` WRITE;
/*!40000 ALTER TABLE `platforms` DISABLE KEYS */;
INSERT INTO `platforms` VALUES (1,'PS4'),(2,'XBOX'),(3,'PC');
/*!40000 ALTER TABLE `platforms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sections`
--

DROP TABLE IF EXISTS `sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sections` (
  `id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
INSERT INTO `sections` VALUES (1,'Recomendados'),(2,'Ofertas'),(3,'Más Vendidos');
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'gameover'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-17 18:21:51
