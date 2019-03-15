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
  ID INT PRIMARY KEY,
  Message VARCHAR(255), /* NOTE: Text is highlighted blue here, but ID is not above, if any unexpected issues, check this*/
  Username INT, 
  Room VARCHAR(255),
  FOREIGN KEY(Username) REFERENCES users(ID)
  /* PROBLEM WITH FOREIGN KEY CONNECTION*/
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

