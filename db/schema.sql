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
    ('Jim', 'Halpert', 1, 1),
    ('Pam', 'Beasley', 4, 1),
    ('Stanley', 'Hudson', 1, 1),
    ('Oscar', 'Martinez', 2, 1),
    ('Toby', 'Flenderson', 3, 1),
    ('Andy', 'Bernard', 1, 1),
    ('Angela', 'Martin', 2, 1),
    ('Kevin', 'Malone', 2, 1),
    ('Michael', 'Scott', 1, NULL);