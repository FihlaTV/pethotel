/**
 * Gets all owners.
 * @author vv
 * @public
 * @name OwnersQuery
 */ 
Select t1.OWNERS_ID, (t1.FIRSTNAME || ' ' || t1.LASTNAME) AS fullName, t1.ADDRESS
, t1.CITY, t1.TELEPHONE 
From OWNERS t1
 Where t1.LASTNAME Like :LastNamePattern