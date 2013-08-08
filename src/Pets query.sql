/**
 * Gets the pets for concrete owner.
 * @public 
 * @author vv
 * @name PetsQuery
 */ 
Select * 
From PETS t1
 Where :ownerID = t1.OWNER