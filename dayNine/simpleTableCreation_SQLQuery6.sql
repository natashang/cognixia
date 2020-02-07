-- from the Oracle: SQL and Exercises set

-- Simple Table Creation
CREATE TABLE QUALMAST (
	QUAL_CODE VARCHAR(4), 
	QUAL_NAME VARCHAR(40),
);
INSERT INTO QUALMAST VALUES('BSc', 'Bachelor of Science');
INSERT INTO QUALMAST VALUES('Bcom','Bachelor of Commerce');
INSERT INTO QUALMAST VALUES('BA','Bachelor of Arts');
INSERT INTO QUALMAST VALUES('MBA','Master of Business Administration');
INSERT INTO QUALMAST VALUES('Msc','Master of Science');


CREATE TABLE INSTITUTE (
	INST_CODE VARCHAR(4),
	INST_NAME VARCHAR(50)
);
INSERT INTO INSTITUTE VALUES ('BOMU','Bombay University');
INSERT INTO INSTITUTE VALUES ('IIMA','Indian Institute of Management, Ahmedabad');
INSERT INTO INSTITUTE VALUES ('XLRI','Xavier Labour Research Institute');
INSERT INTO INSTITUTE VALUES ('IITB','Indian Institute of Technology, Bombay');


CREATE TABLE FRIENDS (
	FR_CODE INT,
	FR_NAME VARCHAR(20),
	FR_DOB DATE,
	FR_SEX VARCHAR(1)
);
INSERT INTO FRIENDS VALUES(1,'Mae', '9-26-97','F');
INSERT INTO FRIENDS VALUES(2,'Selena', '4-2-97','F');
INSERT INTO FRIENDS VALUES(3,'Geo', '11-13-96','M');
INSERT INTO FRIENDS VALUES(4,'Claudette', '4-1-95','F');
INSERT INTO FRIENDS VALUES(5,'Margot', '11-4-97','F');


SELECT * FROM QUALMAST
SELECT * FROM INSTITUTE;
SELECT * FROM FRIENDS;


DROP TABLE QUALMAST
DROP TABLE INSTITUTE
DROP TABLE FRIENDS
