-- Database: films

-- DROP DATABASE IF EXISTS films;

CREATE DATABASE films
    WITH
    OWNER = elivanmak
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- Creation of the 'realisateurs' table

CREATE TABLE realisateurs(
    realisateur_id SERIAL PRIMARY KEY,
    prenom VARCHAR(30),
    nom VARCHAR(30) NOT NULL,
    date_de_naissance DATE,
    nationalite CHAR(2) 
	
);

SELECT * FROM realisateurs;

-- Creation of the 'acteurs' table

CREATE TABLE acteurs(
    acteur_id SERIAL PRIMARY KEY,
    prenom VARCHAR(30),
    nom VARCHAR(30),
    civilite CHAR(1),
    date_de_naissance DATE
);

SELECT * FROM acteurs;

-- Dropping the 'acteurs' table if needed to avoid errors

-- DROP TABLE IF EXISTS acteurs;

-- Modifying the data types in columns (already done above for 'nationalite')

ALTER TABLE realisateurs
ALTER COLUMN nationalite TYPE CHAR(2);


SELECT * FROM realisateurs;

-- Adding into realisateurs table 

INSERT INTO realisateurs (prenom, nom, date_de_naissance, nationalite)
VALUES ('Jean', 'Renoir', '1894-09-15', 'FR');

SELECT * FROM realisateurs;

INSERT INTO acteurs (prenom, nom, civilite, date_de_naissance)
VALUES ('Jean', 'Dujardin', 'M', '1972-06-19');

-- Checking all the time, very important mostly 
SELECT * FROM acteurs;

INSERT INTO acteurs (prenom, nom, civilite, date_de_naissance)
VALUES ('Marion', 'Cotillard', 'F', '1975-09-30');



SELECT * FROM acteurs;

-- counting the number in that coloumn

SELECT COUNT(*) FROM acteurs;

