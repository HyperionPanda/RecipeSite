DROP TABLE IF EXISTS Account;

CREATE TABLE Account(
  id int NOT NULL PRIMARY KEY auto_increment,
  username varchar(30) NOT NULL,
  password varchar(30) NOT NULL
);
