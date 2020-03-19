-- Problems

CREATE TABLE BOOKS(ID CHAR(10), TITLE CHAR(20), AUTHOR CHAR(20), PRICE INT, PUBLISHER CHAR(10)); 

INSERT INTO BOOKS VALUES ('BU1234', 'Little Women', 'Louisa May Alcott', 25, 'London');
INSERT INTO BOOKS VALUES ('BU1235', 'House on the Prarie', 'Laura I. Wilder', 12, 'Belarus');
INSERT INTO BOOKS VALUES ('BU12326', 'Game of Thrones', 'George R.R. Martin', 49, 'Berlin');
INSERT INTO BOOKS VALUES ('BU1237', 'Hunger Games', 'Suzanne Collins', 15, 'Atlanta');
INSERT INTO BOOKS VALUES ('BU1238', 'Twilight', 'Stephanie Meyer', 65, 'Seattle');

SELECT * FROM BOOKS;


-- Display what each books price would be if a 20% price increase were to take place. 
-- Show the title id , old price and new price using meaningful headings.
SELECT
		ID "Book ID",
		PRICE "Old Price",
		PRICE * 1.2  "New Price"
FROM BOOKS;

-- 2.Display the name of books whose price are greater than $20 and less than $55.

SELECT 
	TITLE
FROM BOOKS
WHERE PRICE > 20 AND PRICE < 55;

-- 3.Display the numeric part of every title id (the numeric part of the title eg BU1032 , 1032)
SELECT 
	SUBSTRING(ID, 3, 5) AS 'Numeric ID' 
FROM BOOKS;

--1.You want to retrieve data for all the employees who joined after  '1-12-90' have 4 � 6 years of experience.
CREATE TABLE EMPLOYEES (ID INT, NAME CHAR(10), JOINED DATE, YEARS_OF_EXP INT);
SELECT * FROM EMPLOYEES;

INSERT INTO EMPLOYEES VALUES (1, 'John', '11-23-2018', 4);
INSERT INTO EMPLOYEES VALUES (2, 'Janet', '12-3-88', 32);
INSERT INTO EMPLOYEES VALUES (3, 'Jim', '1-12-90', 5);
INSERT INTO EMPLOYEES VALUES (4, 'Jean', '8-18-95', 10);
INSERT INTO EMPLOYEES VALUES (5, 'Jack', '7-15-90', 5);

SELECT 
	*
FROM EMPLOYEES
WHERE
	JOINED > '1-12-90' AND (4 <= YEARS_OF_EXP AND YEARS_OF_EXP <= 6);

-- 2.You want to know the year of joining of each employee.How do you display those details 
SELECT 
	NAME "Name",
	YEAR(JOINED) "Year of Joining"
FROM EMPLOYEES;

-- Find the titles of books published by any publisher located in a city that begin with the letter �B�
SELECT
	TITLE,
	PUBLISHER
FROM BOOKS
WHERE 
	CHARINDEX('B', PUBLISHER) > 0;


--DROP TABLE BOOKS;
--DROP TABLE EMPLOYEES;
