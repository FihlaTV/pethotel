/**
 * @name OwnersQuery
 * @public
 */
Select t1.OWNERS_ID, (t1.FIRSTNAME || ' ' || t1.LASTNAME) AS fullName, t1.ADDRESS AS address
, t1.CITY AS city, t1.TELEPHONE AS phone, t1.email AS email, t1.FIRSTNAME as firstname, t1.LASTNAME as lastname
From OWNERS t1
 Where t1.LASTNAME Like :lastNamePattern