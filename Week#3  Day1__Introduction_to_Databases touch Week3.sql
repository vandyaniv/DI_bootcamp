-- Database: Public

-- DROP DATABASE IF EXISTS "Public";

CREATE DATABASE "Public"
    WITH
    OWNER = elivanmak
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


-- creating the table items

/*************************************************************************
*****************  the table ITEMS ****************************************
***************************************************************************/

	CREATE TABLE ITEMS( 
	     price INTEGER,
		 item_name VARCHAR(30)
	
	);

	SELECT * FROM items;

-- adding the values of the items_names 

 INSERT INTO items (item_name, price) VALUES
      ('small_desk', 100),
	  ('large_desk', 300),
	  ('fan', 80)
 ;

--All the items.

 	SELECT * FROM items;

--All the items with a price above 80 (80 not included).

SELECT * FROM items WHERE price > 80;

---All the items with a price below 300. (300 included)

SELECT * FROM items WHERE price <= 300;

-- INTEGER because i want number, age, quantity its integer, but im not sure about the VARCHAR i write30 but not sure 


/*************************************************************************
***************** N O W  the table CUSTOMERS ****************************
***************************************************************************/


CREATE TABLE customers(

  fist_name VARCHAR(30),
  last_name VARCHAR(30)
  
);

 	SELECT * FROM customers;

INSERT INTO customers VALUES 

('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Jones'),
('Trevor', 'Green'),
('Melanie', 'Johnson');

 	SELECT * FROM customers;


--All customers whose last name is ‘Smith’ (What will be your outcome?).


-- error into the table need to udpate all 

ALTER TABLE customers RENAME COLUMN fist_name TO first_name;

SELECT * FROM customers;

SELECT * FROM customers WHERE last_name = 'Smith';


--All customers whose last name is ‘Jones’.

SELECT * FROM customers WHERE last_name = 'Jones';

--All customers whose firstname is not ‘Scott’.

SELECT * FROM customers WHERE first_name NOT IN ('Scott');
