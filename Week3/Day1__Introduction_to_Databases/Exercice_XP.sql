-- Database: Bootcamp

-- DROP DATABASE IF EXISTS "Bootcamp";

CREATE DATABASE "Bootcamp"
    WITH
    OWNER = elivanmak
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


-- creating a table 'students'

	CREATE TABLE students(
         id SERIAL PRIMARY KEY,
		 last_name VARCHAR(50),
		 first_name VARCHAR(50),
		 birth_date DATE


	);

-- Checking the same table if any error 

	SELECT * FROM students


-- Adding the list slowly 


INSERT INTO students (last_name, first_name, birth_date)
VALUES 

('Marc', 'Benichou', '02/11/1998');


SELECT * FROM students
-- ok lets adding one by one but im sure there is a methode instead that 


INSERT INTO students (last_name, first_name, birth_date)
VALUES 
('Cohen', 'Yoan', '2010-12-03'),
('Benichou', 'Lea', '1987-07-27'),
('Dux', 'Amelia', '1996-04-07'),
('Grez', 'David', '2003-06-14');

SELECT * FROM students



--Fetch the student which id is equal to 2.

SELECT * FROM students WHERE id = 2;

--Fetch the student whose last_name is Benichou AND first_name is Marc.

SELECT * FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc' ;


--Fetch the students whose last_names are Benichou OR first_names are Marc.

SELECT * FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc' ;


--Fetch the students whose first_names contain the letter a.

SELECT * FROM students WHERE first_name SIMILAR TO '%a%';

--In these snippets [a-zA-Z] means a single letter, + means at least once, % means whatever Stack_overflow found answer 
-- %_a_%
-- it better word % befor or after change the position 



--Fetch the students whose first_names start with the letter a.

 SELECT * FROM students WHERE first_name LIKE 'A%';

--Fetch the students whose first_names end with the letter a.

 SELECT * FROM students WHERE first_name LIKE '%a';

--Fetch the students whose second to last letter of their first_names are a (Example: Leah).
--Fetch the students whose id’s are equal to 1 AND 3 .




