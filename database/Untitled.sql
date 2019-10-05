drop database parks_db;
CREATE DATABASE parks_db;

USE parks_db;



CREATE TABLE parks
(
	id int NOT NULL AUTO_INCREMENT,
	park_name varchar(255) NOT NULL,
	park_address varchar(255) NOT NULL,
	is_petfriendly boolean,
	baseball_field boolean,
    basket_court boolean,
    tennis_court boolean,
    playground boolean,
    trail boolean,
    body_water boolean,
	picture_url varchar (300),
	PRIMARY KEY (id)
);