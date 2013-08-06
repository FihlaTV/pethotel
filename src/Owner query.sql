/**
 * Gets the owner by its Id.
 * @author vv
 * @public
 * @name Owner_Query
 */ 
Select * 
From OWNERS t1
 Where :OwnerId = t1.OWNERS_ID