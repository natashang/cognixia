CREATE database training;

-- no constraint
CREATE table emp(emp_id int, emp_name char(10), emp_location char(10));
SELECT * from emp;

-- add a new column
ALTER TABLE emp ADD emp_email varchar(10); 

-- modify an existing column
ALTER TABLE emp ALTER COLUMN emp_name varchar(15);

-- permanent table deletion
DROP TABLE emp;

-- with primary key, constraints (unique, not null)
CREATE TABLE emp1(emp_id int primary key, emp_name char(10) not null, emp_location char(10) unique);
SELECT * from emp1;

-- insert, use the table with constraints
-- 'this is a string argument!'
INSERT INTO emp1(emp_id, emp_name, emp_location) VALUES (1, 'Jane', 'washington');
INSERT INTO emp1(emp_id, emp_name, emp_location) VALUES (2, 'Joe', 'washing2')
INSERT INTO emp1(emp_id, emp_name, emp_location) VALUES (3, 1234, 'washing3')

-- update a table record
UPDATE emp1 SET emp_location = 'Seattle' WHERE emp_name='Jane';
UPDATE emp1 SET emp_location = 'Bellingham' WHERE emp_name='Joe';

-- delete a table row, a certain set of values
DELETE FROM emp1 WHERE emp_location='washing3'

-- deletes all table rows, an entire set of values
TRUNCATE TABLE emp1;