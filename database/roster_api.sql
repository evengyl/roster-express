CREATE DATABASE IF NOT EXISTS roster_api;

USE roster_api;

DROP TABLE IF EXISTS user;
CREATE TABLE user
(
    user_id            INT AUTO_INCREMENT PRIMARY KEY                                  NOT NULL,
    email              VARCHAR(50) UNIQUE                                              NOT NULL,
    pass               VARCHAR(255)                                                    NOT NULL,
    first_name         VARCHAR(50)                                                     NOT NULL,
    last_name          VARCHAR(150)                                                    NOT NULL,
    job_title          VARCHAR(50)                                                     NULL,
    profile_is_visible boolean   default false                                         NOT NULL,
    create_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP                             NOT NULL,
    update_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);


# sp generate users
USE roster_api;
DROP PROCEDURE IF EXISTS generate_users;
DELIMITER $$
CREATE
    DEFINER = `root`@`localhost` PROCEDURE generate_users(IN nbr_user INT)
begin
    DECLARE _counter INT DEFAULT 1;
    DECLARE _increment INT DEFAULT 1;
    DECLARE _suffix INT DEFAULT 0;

    WHILE _counter <= nbr_user
        DO

            IF (Select max(user_id) from user) is null THEN
                SET _suffix = 1;
            ELSE
                SET _suffix = (Select max(user_id) from user) + 1;
            END IF;

            INSERT INTO `user` (`user_id`,
                                `email`,
                                `pass`,
                                `first_name`,
                                `last_name`,
                                `job_title`,
                                `profile_is_visible`,
                                `create_at`,
                                `update_at`)
            VALUES (NULL,
                    concat(_suffix,'@email.com'),
                    concat('pass',_suffix),
                    concat('first_name_', _suffix),
                    concat('last_name_', _suffix),
                    concat('job_title_', _suffix),
                    '0',
                    CURRENT_TIMESTAMP,
                    CURRENT_TIMESTAMP);

            SET _counter = _counter + _increment;
        END WHILE;
END $$
DELIMITER ;

CALL generate_users(50);

