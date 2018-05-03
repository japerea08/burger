
-- Create the database task_saver_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

DROP if Exists burgers;
-- Create the table tasks.
CREATE TABLE burgers
(
id int AUTO_INCREMENT,
burger_name varchar(50),
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
);