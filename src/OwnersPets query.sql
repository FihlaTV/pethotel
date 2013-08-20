/**
 * @public
 * @author vv
 * @name OwnersPets
 */ 
Select q1.OWNERS_ID, t.NAME
From OwnersQuery q1
 Left Outer Join PETS t on t.OWNER = q1.OWNERS_ID