-- seeds.sql
Drop database if exists employee_tracker_db;
CREATE database employee_tracker_db;
\c employee_tracker_db

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER REFERENCES role(id) ON DELETE SET NULL,
    manager_id INTEGER REFERENCES employee(id) ON DELETE SET NULL
);

-- Sample Data
INSERT INTO department (name) VALUES ('Sales'), ('Engineering'), ('HR');

INSERT INTO role (title, salary, department_id) VALUES
('Sales Manager', 80000, 1),
('Software Engineer', 90000, 2),
('HR Specialist', 60000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Emily', 'Davis', 3, 1);
