-- Create tblCity table
CREATE TABLE tblCity (
  ID INT AUTO_INCREMENT primary key NOT NULL,
  Name          VARCHAR(100)  ,
  StateID   INT,
)  

-- Create tblState table
CREATE TABLE tblState (
  ID INT AUTO_INCREMENT primary key NOT NULL,
  Name          VARCHAR(100) ,
  CountryID   INT
)  

-- Create tblCountry table
CREATE TABLE tblCountry (
  ID INT AUTO_INCREMENT primary key NOT NULL,
  Name          VARCHAR(100)  
) 


-- Create customer table
CREATE TABLE tblEMP (
  ID INT AUTO_INCREMENT primary key NOT NULL,
  FirstName               VARCHAR(100)   NOT NULL,
  LastName               VARCHAR(100)   NOT NULL,
  Email             VARCHAR(50)  NOT NULL,
  MobileNo           VARCHAR(10)   NOT NULL,
  Hobbies               TEXT,
  Gender          VARCHAR(50),
 RegistrationDate      DATETIME      NOT NULL,
  CountryID   INT NOT NULL,
  StateID   INT  NOT NULL,
  CityID   INT  NOT NULL
)