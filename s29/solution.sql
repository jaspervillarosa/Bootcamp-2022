--creae blog_db
CREATE DATABASE blog_db;

--SELECT blog_d
USE blog_db;

--CREATE users table.
CREATE TABLE users (

    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(300) NOT NULL,
    datetime_created DATETIME NOT NULL,
    PRIMARY KEY (id)

);

--CREATE posts table

CREATE TABLE posts (

    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (500) NOT NULL,
    content VARCHAR (5000) NOT NULL,
    datetime_posted DATETIME NOT NULL,
    user_id INT NOT NULL,   
    PRIMARY KEY (id),

    CONSTRAINT fk_posts_user_id
        FOREIGN KEY (user_id) REFERENCES users (id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

--CREATE post_comments table
CREATE TABLE post_comments (

    id INT NOT_NULL AUTO_INCREMENT,
    content VARCHAR (5000) NOT NULL,
    datetime_commented DATETIME NOT NULL,

    post_id INT NOT NULL,
    user_id INT NOT NULL,BIGINT
    PRIMARY KEY (id),BIGINT
    CONSTRAINT fk_post_comments_post_id
        FOREIGN KEY (post_id) REFERENCES posts (id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

     CONSTRAINT fk_post_comment_user_id
        FOREIGN KEY (user_id) REFERENCES users (id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

);

--CREATE posts_likes_table.
CREATE TABLE post_likes (

    id INT NOT NULL AUTO_INCREMENT,
    datetime_like DATETIME NOT NULL,

    post_id INT NOT NULL,
    user_id INT NOT NULL,

    PRIMARY KEY (id),

    CONSTRAINT fk_post_likes_post_id
        FOREIGN KEY (post_id) REFERENCES posts (id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
    
     CONSTRAINT fk_post_likes_user_id
        FOREIGN KEY (user_id) REFERENCES users (id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT

);


--INSERT values in user table.
INSERT INTO users (email, password, datetime,_created)
VALUES ("johnsmith@gmail.com", "passwordA", "2021-01-01 01:00:00");

INSERT INTO users (email, password, datetime,_created)
VALUES ("juandelacruz@gmail.com", "passwordB", "2021-01-01 02:00:00");

INSERT INTO users (email, password, datetime,_created)
VALUES ("janesmith@gmail.com", "passwordC", "2021-01-01 03:00:00");

INSERT INTO users (email, password, datetime,_created)
VALUES ("mariadelacruz@gmail.com", "passwordD", "2021-01-01 04:00:00");

INSERT INTO users (email, password, datetime,_created)
VALUES ("johndoe@gmail.com", "passwordE", "2021-01-01 05:00:00");

--INSERT VALUES IN THE POST TABLE

INSERT INTO posts (user_id, title, content, datetime_posted)
VALUES (1, "First Code", "Hello World", "2021-01-02 01:00:00");

INSERT INTO posts (user_id, title, content, datetime_posted)
VALUES (2, "Second Code", "Hello Earth", "2021-01-02 02:00:00");

INSERT INTO posts (user_id, title, content, datetime_posted)
VALUES (3, "Third Code", "Welcome to Mars", "2021-01-02 03:00:00");

INSERT INTO posts (user_id, title, content, datetime_posted)
VALUES ("4, Fourth Code", "Bye Bye Solar System", "2021-01-02 04:00:00");