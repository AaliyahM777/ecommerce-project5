-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS db_PenPowers;
-- Create a database called programming_db --
CREATE DATABASE db_PenPowers;

USE db_PenPowers ;

--Created products table with listed datatypes--
-- set Product_id as primary key= --
CREATE TABLE Products(
Product_id INT AUTO_INCREMENT NOT NULL,
Img_url VARCHAR(200) NOT NULL,
Product_title VARCHAR(100) NOT NULL,
Product_Description VARCHAR(250) NOT NULL,
Product_categories VARCHAR(20) NOT NULL,
primary key(Product_id)
);

INSERT INTO Products (Product_id, Img_url,Product_title,Product_Description, Product_categories,)
VALUES (1,"https://nibsmith.com/wp-content/uploads/2018/09/platinum-3776-Chenonceau-White-fountain-pen-nibsmith.jpg" ,"Chenonceau White Fountain Pen", "Nice fountain pen to write with", "businesspens"),
(2, "https://images-na.ssl-images-amazon.com/images/I/61gk40Se5vL._SL1500_.jpg", "Kyinflose Business Pen", "Nice slim black pen", "business"),
(3, "https://ae01.alicdn.com/kf/HTB1LhCng9BYBeNjy0Feq6znmFXaX/TERCEL-metal-gold-plated-roller-pen-business-pen-ballpoint-pen-signature-pencil-box-color-sequins-pen.jpg_640x640.jpg", "TERCEL Metal Gold Plated Pen" ,"Nice gold plated pen", "businesspens"),
(4, "https://img10.joybuy.com/N0/s560x560_jfs/t21319/95/1757175163/34978/7c7111de/5b359f0cN267fa4b8.jpg.dpg","BaseBall Wood Pens(2 Pieces)","Wooden textured baseball pens","funartpens"),
(5, "https://m.media-amazon.com/images/I/41nvXKUvrOL._SR500,500_.jpg", "7pcs Vitamin Ballpoint Pens","vitamin shaped pens", "funartpens"),
(6, "https://images-na.ssl-images-amazon.com/images/I/71mMCW7wMiL._SL1500_.jpg", "Cactus Design Ballpoint Pen","Cactus shaped pen","funartpens"),
(7, "https://images-na.ssl-images-amazon.com/images/I/61xfoF5Qi7L._SL1001_.jpg", "10pcs Novelty Bone Shape Ballpoint Pens","Break a leg with these bone shaped pens", "funartpens"),
(8, "https://www.digitalartsonline.co.uk/cmsdata/slideshow/3695874/sailor-fude-de-mannen_thumb800.jpg", "Sailor Fude De Mannen-Stroke style calligraphy fountain pen","Used for writing in style", "funartpens"),
(9, "https://images-na.ssl-images-amazon.com/images/I/61bYUCzuM1L._SX425_.jpg", "Staedtler Pigment Liner Pen","Good for writing alignment", "funartpens"),
(10, "https://images-na.ssl-images-amazon.com/images/I/31tCcVnbLSL._SX425_.jpg", "Sakura Pigma Micron Pen ","A pen with pointy design", "funartpens"),
(11, "https://images-na.ssl-images-amazon.com/images/I/51iMBL%2BekEL._SX425_.jpg", "MengRan Rose Gold Diamond Pen","Rose gold colored with a diamond displayed on top", "funartpens"),
(12, "https://static.bhphoto.com/images/images500x500/1447179616_1185701.jpg", "Quartet 4-in-1 Pen","A Four in one useful pen that can be used in multiple ways", "businesspens");


-- interger not null unique --
CREATE TABLE Price(
Price_id INT AUTO_INCREMENT NOT NULL,
Product_id INT NOT NULL,
Price_values DECIMAL(5,2),
primary key(Price_id)
);


INSERT INTO Price ( Product_id,Price_values)
VALUES ( 1, 143.00),
( 2, 8.99),
(3,17.99),
(4, 7.99),
(5, 6.99),
(6, 9.99),
(7, 9.99),
(8, 6.99),
(9, 8.99),
(10, 12.99),
(11, 5.99),
(12, 56.99
);


CREATE TABLE Contacts(
Customer_id INT  AUTO_INCREMENT NOT NULL,
Customer_name VARCHAR(35),
Customer_email VARCHAR(30),
Customer_comments VARCHAR(500),
primary key(Customer_id)
);



INSERT INTO Contacts (Customer_name, Customer_email, Customer_comments)
VALUES ("James Bond", "JamesB007@gmail.com", "When you guys make pens that contain spyware"),
("Patrick Star", "Patrickrocks0@gmail.com","Where can I find pens on your website"),
("Sherlock Holmes","SherlockH1899@aol.com","My fellow coworker Watson heard about PenPowers, by any chance will you create ink pens that are not as updated, perhaps a feather pen would be a great apporach"),
("Jimmy Neutron", "Jimmytron687@gmail.com","It it possible to create audio for a pen product that can say GOTTA BLAST!?"),
( "Mickey Mouse", "MickeydaMouse@gmail.com","ahaha me and pluto enjoy our new penpowers pen while playing fetch"),
("Dwayne Johnson", "DwayneRJohnson@gmail.com", "Do you SMELLL what Penpowers is cooking!!??"),
("John Cena", "Youcantseeme0@gmail.com","I write so fast so you cant see me"),
("Pinochio","Thenoselies@yahoo.com","Penpowers is the best penmaking company EVER!"),
("Edena Mode", "Jimmytron687@gmail.com","yes darling your pens have high quality design, its fabulous"),
("Nathan Drake","SirNathanDrake@gmail.com","PenPowers products are great I use them everyday with my journal while out traveling and exploring different countries"),
("Denzel Quincy Crocker","Crocker3575@aol.com","My Pen went missing because of TIMMY and his FAIRY-GOD-PARENTS"
);











