DROP DATABASE IF EXISTS office_db;
CREATE DATABASE office_db;
Use office_db;

CREATE TABLE departments (
    id: INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dep_name: VARCHAR(30)
);

CREATE TABLE roles (
    id: INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title: VARCHAR(30),
    salary: DECIMAL,
    department_id INT FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employee (
    id: INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name: VARCHAR(30),
    last_name: VARCHAR(30),
    role_id: INT FOREIGN KEY (role_id) REFERENCES roles(id),
    manager_id; INT FOREIGN KEY (manager_id) REFERENCES employee(id)
);
