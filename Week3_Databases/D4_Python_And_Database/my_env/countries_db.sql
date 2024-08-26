CREATE TABLE countries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    capital VARCHAR(255),
    flag TEXT,
    subregion VARCHAR(255),
    population BIGINT
);


INSERT INTO countries (name, capital, flag, subregion, population, test_info)
VALUES ('TestCountry', 'TestCapital', 'https://testflag.url', 'TestSubregion', 123456, 'Test Info');




