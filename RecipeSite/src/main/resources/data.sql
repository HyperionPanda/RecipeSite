//probably remove this later, shouldn't drop tables with stuff stored
DROP TABLE IF EXISTS Account;
DROP TABLE IF EXISTS Recipe;

CREATE TABLE Account(
  id int NOT NULL PRIMARY KEY auto_increment,
  username varchar(30) NOT NULL,
  password varchar(30) NOT NULL
);

CREATE TABLE Recipe(
  recipeId int NOT NULL PRIMARY KEY auto_increment,
  userId int NOT NULL,
  ingredients varchar(2000),
  cookingSteps varchar(5000)
);
