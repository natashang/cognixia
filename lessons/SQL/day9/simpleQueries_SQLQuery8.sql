/*
	Using the employee table
*/

SELECT * FROM EMPLOYEE

-- 	1.	Get a list of all male employees.
SELECT EMP_NAME FROM EMPLOYEE WHERE SEX = 'M';

-- 	2.	Get a list of all female employees.
SELECT EMP_NAME FROM EMPLOYEE WHERE SEX = 'F'

-- 	3.	Get a list of all employees older than 50 years.
SELECT EMP_NAME, AGE FROM EMPLOYEE WHERE AGE > 50

-- 	4.	Get a list of all employee younger than 25 years.
SELECT EMP_NAME, AGE FROM EMPLOYEE WHERE AGE < 25

-- 	5.	Get a list of all employees between 20 and 30 years of age.
SELECT EMP_NAME, AGE FROM EMPLOYEE WHERE (20 <= AGE AND AGE <= 30)

-- 6.	Get a list of all employees who have joined the company in the year 1995.
SELECT EMP_NAME, DATE_JOIN FROM EMPLOYEE WHERE (YEAR(DATE_JOIN) = 1995)

-- 7.	Get a list of all employees from FIN, HRD and COMM departments.
SELECT EMP_NAME, DEPT_CODE FROM EMPLOYEE WHERE DEPT_CODE IN ('FIN', 'HRD', 'COMM');

-- 8.	Get a list of all employees who are not in HRD department.
SELECT EMP_NAME, DEPT_CODE FROM EMPLOYEE WHERE DEPT_CODE NOT IN ('HRD')

-- 9.	Get a list of all employees whose name starts with the letter A.
SELECT EMP_NAME FROM EMPLOYEE WHERE EMP_NAME LIKE 'A%'

-- 10.	Unmarried male employee greater than 35 years of age, and unmarried female employees greater than 30 years of age are given a "single person special leave". 
-- Get a list of all employees eligible for this scheme.
SELECT EMP_NAME, MARRIED, AGE
FROM EMPLOYEE
WHERE (SEX = 'M' AND AGE > 35 AND MARRIED = 'N')
	OR (SEX = 'F' AND AGE > 30 AND MARRIED = 'N');


/*
	Using the product table
*/
SELECT * FROM PRODUCT;

--	1.	Get a list of all products from product group = 2.
SELECT * FROM PRODUCT WHERE PRODGR_CODE = 2

--	2.	Get a list of all products where product group is not 2.
SELECT * FROM PRODUCT WHERE PRODGR_CODE != 2

--	3.	Get a list of all products which sell for more than Rs. 100.
SELECT * FROM PRODUCT WHERE SALE_PRICE > 100

--	4.	Get a list of all products which sell for less than Rs. 50.
SELECT * FROM PRODUCT WHERE SALE_PRICE < 50

--	5.	Get a list of all products which sell for between Rs. 50 and Rs. 100.
SELECT * FROM PRODUCT WHERE (50 <= SALE_PRICE AND SALE_PRICE <= 100)

--	6.	Get a list of all products where the target is between 1000 and 2000.
SELECT * FROM PRODUCT WHERE (1000 <= TARGET AND TARGET <= 2000)

--	7.	Get a list of all products whose name begins with the letter D.
SELECT * FROM PRODUCT WHERE PROD_NAME LIKE 'D%'