const inquirer = require('inquirer');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;


const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'rootroot',
    database: 'office_db'
  },
  console.log(`Connected to the office_db database.`)
);

function startMenu() {
  inquirer
    .prompt ([
      {
        type: 'list',
        message: 'Welcome to the Office',
        name: 'start',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
      }
    ])
    .then((res) => {
      switch (res.startMenu){
        case 'View all departments': viewAllDepts();
        break;
        case 'View all roles': viewAllRoles();
        break;
        case 'View all employees': viewAllEmp();
        break;
        case 'Add a department': addDept();
        break;
        case 'Add a role': addRole();
        break;
        case 'Add an employee': addEmp();
        break;
        case 'Update an employee': updateEmp();
        break;
        case 'Exit': connection.end;
        break;
      }
    })
};

function viewAllDepts() {
  const query = "SELECT*FROM departments"
  connection.query(query, function (err, res){
    console.table(res)
    startMenu()
  })
};
function viewAllDepts() {
  const query = "SELECT*FROM roles"
  connection.query(query, function (err, res){
    console.table(res)
    startMenu()
  })
};
function viewAllDepts() {
  const query = "SELECT*FROM employees"
  connection.query(query, function (err, res){
    console.table(res)
    startMenu()
  })
}

startMenu();