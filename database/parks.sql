
drop database parks_db;
CREATE DATABASE parks_db;

USE parks_db;

CREATE TABLE clients
(
	id int NOT NULL AUTO_INCREMENT,
	client_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

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
	PRIMARY KEY (id),
	FOREIGN KEY (id) REFERENCES clients(id)
);
INSERT INTO parks (park_name, park_address, is_petfriendly, baseball_field, basket_court, tennis_court, playground, trail, body_water, picture_URL ) VALUES ('Lincoln Park', '500-5700 N. Lake Shore Drive', true, true, true, true, true, true, true,'https://chicagoapartmentplace.com/wp-content/uploads/2019/02/things-to-do-in-lincoln-park.jpeg');
INSERT INTO parks (park_name, park_address, is_petfriendly, baseball_field, basket_court, tennis_court, playground, trail, body_water, picture_URL ) VALUES ('Millennium Park', '201 E Randolph St', true, true, true, true, true, true, true, 'https://www.tripsavvy.com/thmb/oViv3h3BRBLlqH8hCFbyvWDtwjw=/3736x2665/filters:no_upscale():max_bytes(150000):strip_icc()/millennium-park-in-chicago-illinois-546716173-591b2c113df78cf5fa191b52.jpg');
INSERT INTO parks (park_name, park_address, is_petfriendly, baseball_field, basket_court, tennis_court, playground, trail, body_water, picture_URL ) VALUES ('Wiggly Field Dog Park', '2645 N Sheffield Ave,', true, false, false, false, false, false, false, 'https://i.ytimg.com/vi/pNx4Fe1ja88/hqdefault.jpg');
INSERT INTO parks (park_name, park_address, is_petfriendly, baseball_field, basket_court, tennis_court, playground, trail, body_water, picture_URL ) VALUES ('Jonquil Park', '1001 W Wrightwood Ave,', true, false, false, false, true, true, false, 'https://assets.chicagoparkdistrict.com/s3fs-public/styles/16_9_100_width/public/images/gallery/Jonquil_Eagle_2.JPG?itok=KhSbbXY0');
INSERT INTO parks (park_name, park_address, is_petfriendly, baseball_field, basket_court, tennis_court, playground, trail, body_water, picture_URL ) VALUES ('Oz Park', ' 2021 N Burling St,', true, true, true, true, true, true, false, 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://Chicago.simpleviewcrm.com/images/listings/original_A.Alexander_OZPark_030.JPG');