DROP DATABASE IF EXISTS chat;
/* Might need to drop tables instead of drop database*/


CREATE DATABASE chat;

USE chat;


/*         NOTES FOR LATER
  Add in NOT NULL in areas to prevent 


*/
CREATE TABLE users (
  ID INT PRIMARY KEY,
  Username VARCHAR(255) NO NULL
);

CREATE TABLE messages (
  /* Describe your table here.*/

  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  text varchar(200)  NOT NULL,
  roomname varchar(20),
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */


CREATE TABLE users (
  id        int    NOT NULL AUTO_INCREMENT,
  username  varchar(40)   NOT NULL,
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

