
-- Create the database task_saver_db and specified it for use.
USE heroku_80b35b2ee1d6ee7;

-- Create the table tasks.
CREATE TABLE burgers
(
id int AUTO_INCREMENT,
burger_name varchar(50),
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
);