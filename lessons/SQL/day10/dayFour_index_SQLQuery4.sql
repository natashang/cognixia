/*
	executed with select * from friends
	can know data without index
	but not good for huge sizes of data

	memory and performance information:

	Scan count 1, 
	logical reads 1, 
	physical reads 0, 
	read-ahead reads 0, 
	lob logical reads 0, 
	lob physical reads 0, 
	lob read-ahead reads 0

	can also see this information by select "set statistics..." and "select *...", 
	display estimated execution plan
*/
set statistics io on


/* 
	display estimated execution plan
	query cost (relative to the batch): 100% --> this was the only statement
*/
select * from friends;

-- takes more time because have to go through each row
-- for less time, and on a huge DB size: use an index for less consumption
--select fr_name, fr_dob from friends where fr_sex = 'm';

