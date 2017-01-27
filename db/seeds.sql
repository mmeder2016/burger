/* QUERIES */
USE burgers_db;

SHOW TABLES;
SHOW COLUMNS FROM burgers;
SELECT * FROM burgers;

/*("Big Mac", true),*/

INSERT INTO burgers (burger_name, devoured) VALUES 
("Whooper Cheesie", true),
("Whopper", true),
("Big Mac", true)
