import inquirer from 'inquirer';
import { pool, connectToDb } from '../db/connection.js';

await connectToDb();

 async function mainMenu() {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View All Departments', 'View All Roles', 'View All Employees',
        'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role',
        'Update Employee Manager', 'View Employees by Manager', 'View Employees by Department',
        'Delete Department', 'Delete Role', 'Delete Employee', 'View Department Budget', 'Exit'
      ],
    },
  ]);

  switch (action) {
    case 'View All Departments':
      console.table(await viewAllDepartments());
      break;
    case 'View All Roles':
      console.table(await viewAllRoles());
      break;
    case 'View All Employees':
      console.table(await viewAllEmployees());
      break;
    case 'Add Department':
      await addDepartment();
      break;
    case 'Add Role':
      await addRole();
      break;
    case 'Add Employee':
      await addEmployee();
      break;
    case 'Update Employee Role':
      await updateEmployeeRole();
      break;
    case 'Update Employee Manager':
      await updateEmployeeManager();
      break;
    case 'View Employees by Manager':
      console.table(await viewEmployeesByManager());
      break;
    case 'View Employees by Department':
      console.table(await viewEmployeesByDepartment());
      break;
    case 'Delete Department':
      await deleteDepartment();
      break;
    case 'Delete Role':
      await deleteRole();
      break;
    case 'Delete Employee':
      await deleteEmployee();
      break;
    case 'View Department Budget':
      console.table(await viewDepartmentBudget());
      break;
    case 'Exit':
      console.log('Goodbye!');
      process.exit();
  }
  
  await mainMenu();
}

async function viewAllDepartments() {
  const result = await pool.query('SELECT * FROM department');
  return result.rows;
}

async function viewAllRoles() {
  const result = await pool.query('SELECT * FROM role');
  return result.rows;
}

async function viewAllEmployees() {
  const result = await pool.query('SELECT * FROM employee');
  return result.rows;
}

async function addDepartment() {
  console.log('Adding a new department...');
}

async function addRole() {
  console.log('Adding a new role...');
}

async function addEmployee() {
  console.log('Adding a new employee...');
}

async function updateEmployeeRole() {
  console.log('Updating employee role...');
}

async function updateEmployeeManager() {
  console.log('Updating employee manager...');
}

async function viewEmployeesByManager() {
  console.log('Viewing employees by manager...');
}

async function viewEmployeesByDepartment() {
  console.log('Viewing employees by department...');
}

async function deleteDepartment() {
  console.log('Deleting department...');
}

async function deleteRole() {
  console.log('Deleting role...');
}

async function deleteEmployee() {
  console.log('Deleting employee...');
}

async function viewDepartmentBudget() {
  console.log('Viewing department budget...');
}

mainMenu();