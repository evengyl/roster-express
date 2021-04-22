CREATE DATABASE IF NOT EXISTS roster_api;

USE roster_api;

CREATE TABLE user
(
    user_id            INT AUTO_INCREMENT PRIMARY KEY      NOT NULL,
    email              VARCHAR(50) UNIQUE                  NOT NULL,
    first_name         VARCHAR(50)                         NOT NULL,
    last_name          VARCHAR(150)                        NOT NULL,
    job_title          VARCHAR(50)                         NULL,
    profile_is_visible boolean   default false             NOT NULL,
    create_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    update_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
