/**
 * Gets all visits for concrete owner.
 * @public
 * @author vv
 * @name VisitsQuery
 */ 
Select t1.VISIT_ID, t1.PET, t1.FROMDATE
, t1.TODATE, t1.DESCRIPTION 
From VISIT t1
 Inner Join PetsQuery q on t1.PET = q.PETS_ID