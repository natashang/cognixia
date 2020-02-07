/*
	Modifying Table Structure

	1.	Add a field in the dept table as follows:
		cost_center_code		number (3)
	2.	Add a field in the friends table as follows:
		phone				varchar2 (20)	
		Also increase the size of the fr_name field to 25.
	3.	Add the following fields in the product table as follows:
		current_stock			number (5)
		reorder_level			number (5)
		abc_code			varchar2 (1)

*/
ALTER TABLE DEPARTMENT ADD COST_CENTER_CODE FLOAT

ALTER TABLE FRIENDS ADD PHONE VARCHAR(20)
ALTER TABLE FRIENDS ALTER COLUMN FR_NAME VARCHAR(25)

ALTER TABLE PRODUCT ADD CURRENT_STOCK FLOAT
ALTER TABLE PRODUCT ADD REORDER_LEVEL FLOAT
ALTER TABLE PRODUCT ADD ABC_CODE VARCHAR(1)