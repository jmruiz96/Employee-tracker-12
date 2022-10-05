DROP DATABASE IF EXISTS office_db;
CREATE DATABASE office_db;
Use office_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR (30) NOT NULL 
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    dept_id INT NOT NULL, 
    FOREIGN KEY (dept_id) 
    REFERENCES departments(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
     FOREIGN KEY (role_id) REFERENCES roles(id),
    manager_id INT,
     FOREIGN KEY (manager_id) REFERENCES employee(id)
);

INSERT INTO departments
    (dept_name)
VALUES
    ('Sales'),
    ('Accounting'),
    ('Human Resources'),
    ('Reception');

INSERT INTO roles
    (title, salary, dept_id)
VALUES
    ('Salesman', 100000, 1),
    ('Accountant', 80000, 2),
    ('HR Rep', 75000, 3),
    ('Receptionist', 60000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Jim', 'Halpert', 1, NULL),
    ('Pam', 'Beasley', 4, NULL),
    ('Stanley', 'Hudson', 1, NULL),
    ('Oscar', 'Martinez', 2, NULL),
    ('Toby', 'Flenderson', 3, NULL),
    ('Andy', 'Bernard', 1, NULL),
    ('Angela', 'Martin', 2, NULL),
    ('Kevin', 'Malone', 2, NULL),
    ('Michael', 'Scott', 1, 1);