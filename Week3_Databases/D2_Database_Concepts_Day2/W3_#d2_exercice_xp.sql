select * from customer

--In the dvdrental database write a query to select all the columns from the “customer” table. ✓


SELECT (first_name ,' ' ,last_name) AS full_name FROM customer;

--Write a query to display the names (first_name, last_name) using an alias named “full_name”.✓
-- i wanted a methode to find on all the folder 


--Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).

SELECT *, TO_CHAR(create_date, 'DD/MM/YYYY') AS niceDate
FROM customer
ORDER BY create_date DESC;
-- How to check if its duplicates its boolean that mean cannot set two time the same id_number i guess but not sure


--get all the customer details from the customer table, it should be displayed in descending order by their first name.


--get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.


SELECT 
  film_id,title, description, release_year, rental_rate 
FROM film
ORDER BY rental_rate DESC;

--get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.

SELECT
  address_id, address, address2, district, city_id, postal_code, phone
FROM address
WHERE district = 'Texas';


--Write a query to retrieve all movie details where the movie id is either 15 or 150. this question is not clear
SELECT *
FROM film
WHERE film_id = 15 OR film_id = 150;


--Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'in%';

--Write a query which will find the 10 cheapest movies.
