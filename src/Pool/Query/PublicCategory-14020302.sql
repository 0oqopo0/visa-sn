SELECT
    * FROM 
    publiccategory;
    
INSERT INTO publiccategory VALUES (
    (SELECT max(id)+1 FROM publiccategory),
    CURRENT_TIMESTAMP,
    (select max(code)+1 FROM publiccategory),
    '??????????',
    'Instagram',
    01
);
-========================================================--
ALTER TABLE publiccategory 
ADD Str_data varchar2(4000) ;