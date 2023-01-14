-- INSERT COMMAND

--INSERT INTO table_name(column_name) VALUES (column_value)

--INSERTING RECORDS
--MYSQL Year Format: yyyy-mm-dd

--insert values in artists table
INSERT INTO artists(name) VALUES("Rivermaya");
INSERT INTO artists(name) VALUES("Psy");
INSERT INTO albums (album_title, date_released, artist_id) VALUES ("Psy 7", "2012-1-1", 2)
INSERT INTO albums (album_title, date_released, artist_id) VALUES ("Trip", "1996-1-1", 1)


--Display all the title and genre of all the songs
SELECT  song_name, genre FROM songs;

--Display all the colums in the song TABLE
SELECT * FROM songs;
-- *all

--Disply the title of all the OPM songs
SELECT  song_name FROM songs WHERE genre LIKE 'OPM';
SELECT  song_name FROM songs WHERE genre = 'OPM';

--We can se AND OR cluase for mulitple expressios in the WHERE cluase

--Display the title and length of the OPM SONGS that are more than 2 minutes
SELECT song_name, length FROM songs WHERE length > 200 AND genre = "OPM"

-- updating records
--Syntax: UPDATE table_name SET column1 = value1 WHERE condition
UPDATE songs SET length  = 240 WHERE song_name = "Kundiman";
UPDATE songs SET length  = 200 WHERE song_name = "Gangnam Style";

--Deleting records syntax
--Syntax: DELETE FROM table_name WHERE condition

--Delete all OPM songs that are equal or more than 2 minutes
DELETE FROM songs WHERE genre = "OPM" AND length >= 200