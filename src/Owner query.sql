/**
 * Gets the owner by its Id.
 * @author vv
 * @public
 * @name OwnerQuery
 */ 
Select * 
From OWNERS t1
 Where :ownerID = t1.OWNERS_ID