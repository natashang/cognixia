CREATE TABLE emp2(empid int, empname char(10), emplocation char(10));

-- get table description
sp_help emp2;

-- change column name
sp_rename 'emp2.emplocation', 'location';

select * from emp3;

CREATE TABLE EMP4(EMPID INT IDENTITY, EMP_NAME CHAR(10), SALARY INT);
SELECT * FROM EMP4;
SP_HELP EMP4;
DROP TABLE EMP4;

INSERT INTO EMP4 VALUES ('JOHN', 200); 

-- Automatically set the identity value 
-- IDENTITY(START_VALUE, INCREMENT_VALUE)
CREATE TABLE EMP5(EMPID INT IDENTITY(100, 5), EMP_NAME CHAR(10), SALARY INT)
INSERT INTO EMP5 VALUES ('JOHN', 200); 
INSERT INTO EMP5 VALUES ('JOHN', 200); 
INSERT INTO EMP5 VALUES ('JOHN', 200); 
SELECT * FROM EMP5;
DROP TABLE EMP5;

-- Manually set the identity value
-- gives an error, cannot insert explicity value for identity column
-- SET IDENTITY_INSERT <TABLENAME> OFF; 
SET IDENTITY_INSERT EMP5 ON;
INSERT INTO EMP5(EMPID, EMP_NAME, SALARY) VALUES (21, 'JOHN', 200); 


-- -------------------------- SELECT -------------------------------- --

CREATE TABLE EMP6(EMPID INT IDENTITY(1, 1), EMPNAME CHAR(10), EMPLOCATION CHAR(10), EMPSALARY INT);
INSERT EMP6 VALUES ('Abe', 'USA', 100);
INSERT EMP6 VALUES ('Becky', 'UK', 200);
INSERT EMP6 VALUES ('Cal', 'Canada', 300);
INSERT EMP6 VALUES ('Dean', 'Australia', 400);
INSERT EMP6 VALUES ('Ernest', 'Spain', 500);
DROP TABLE EMP6

SELECT * FROM EMP6;
SELECT EMPID, EMPNAME FROM EMP6;
SELECT DISTINCT EMPID FROM EMP6;

-- arithmetic
SELECT EMPNAME, EMPSALARY, EMPSALARY+200 FROM EMP6
SELECT EMPNAME, EMPSALARY, EMPSALARY*200 FROM EMP6
SELECT EMPNAME, EMPSALARY, EMPSALARY/100 FROM EMP6
SELECT EMPNAME, EMPSALARY, EMPSALARY-100 FROM EMP6

-- alias
SELECT EMPNAME AS NAME, EMPSALARY AS SALARY FROM EMP6;
SELECT EMPNAME "Emp Name", EMPSALARY * 12 "Annual Salary" FROM EMP6

-- concatenation
SELECT EMPNAME, EMPSALARY, CONCAT(EMPNAME, ' ', EMPSALARY) AS "Employee and Pay" FROM EMP6;
SELECT EMPNAME + ', ' + EMPLOCATION AS 'HELLO' FROM EMP6;

-- literal character strings
SELECT CONCAT(EMPNAME, ': 1 Month Salary = ', EMPSALARY) AS "Monthly Salary" FROM EMP6

-- alternative quote (q) character
SELECT CONCAT(EMPNAME, 'it''s assigned ID: ', EMPID) AS "HELLO THERE" FROM EMP6;

-- constraints
CREATE TABLE TAB_CHCK (
	EMPID INT, 
	EMPSALARY INT CONSTRAINT EMP_SAL_CHK CHECK (EMPSALARY > 100));
INSERT INTO TAB_CHCK VALUES (1, 200)
INSERT INTO TAB_CHCK VALUES (2, 50) -- throws an insert conflict statement, check constraint "EMP_SAL_CHK"
SELECT * FROM TAB_CHCK;
DROP TABLE TAB_CHCK

CREATE TABLE TAB_CHCK2 (
	EMPID INT CONSTRAINT EMP_CHCK1 CHECK(EMPID IS NOT NULL), 
	EMPSALARY INT CONSTRAINT EMP_CHCK2 CHECK(EMPSALARY > 100));
INSERT TAB_CHCK2
	VALUES(NULL, 300); -- throws an insert conflict statement, check constraint "EMP_CHCK1"
SELECT *
	FROM TAB_CHCK2;
DROP TABLE TAB_CHCK2

-- primary key, foreign keys
-- DEPARTMENT is the parent table
CREATE TABLE DEPARTMENT (DEPTNO INT PRIMARY KEY, NAME CHAR(10), LOCATION CHAR(10));
INSERT INTO DEPARTMENT VALUES(10, 'Max', 'bellingham');
INSERT INTO DEPARTMENT VALUES(20, 'Mac', 'bellevue');
INSERT INTO DEPARTMENT VALUES(30, 'Mak', 'burlington');
INSERT INTO DEPARTMENT VALUES(40, 'Maz', 'ballard');

TRUNCATE TABLE DEPARTMENT;

-- EMP is the child table
-- the foreign key must reference the parent table and column
CREATE TABLE EMP(EMPID INT, EMPNAME CHAR(10), EMPSALARY INT, DEPTNO INT FOREIGN KEY references DEPARTMENT(DEPTNO));
INSERT EMP VALUES(1, 'Max', 100, 10);
INSERT EMP VALUES(2, 'Max', 200, 1); -- error: insert statement conflict with foreign key DEPARTMENT(DEPTNO)


SELECT * FROM DEPARTMENT;
SELECT * FROM EMP;