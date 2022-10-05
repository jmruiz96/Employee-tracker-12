const inquirer = require('inquirer');
const mysql = require('mysql2');
const conTable = require('console.table')

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
      switch (res.start){
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
        case 'Update an employee role': updateEmp();
        break;
        case 'Exit': process.exit();
        break;
      }
    })
};

function viewAllDepts() {
  const query = "SELECT*FROM departments"
  db.query(query, function (err, res){
    //console.log(res)
    console.table(res)
    startMenu()
  })
};
function viewAllRoles() {
  const query = "SELECT*FROM roles"
  db.query(query, function (err, res){
    console.table(res)
    startMenu()
  })
};
function viewAllEmp() {
  const query = "SELECT*FROM employee"
  db.query(query, function (err, res){
    console.table(res)
    startMenu()
  })
};

function addDept() {
  inquirer
  .prompt ({
    type: 'input',
    message: 'Add department name',
    name: 'newDept'
  })
  .then(function (res){
    const newDept = res.newDept;
    const query = `INSERT INTO departments (dept_name) VALUES ('${newDept}'\)`;
    db.query(query, function (err, res){
      console.table(res)
      startMenu()
  })
})
};
function addRole() {
  inquirer
  .prompt ([{
    type: 'input',
    message: 'Add the new role',
    name: 'newRole'
  },
  {
    type: 'input',
    message: "Add this role's salary",
    name:'newSal'
  },
  {
    type: 'input',
    message: "Add this role to a department",
    name: 'newRDept'
  }])
  .then(function (res){
    const role = res.newRole;
    const roleSal = res.newSal;
    const roleDept = res.newRDept;
    const query = `INSERT INTO roles (title, salary, dept_id) VALUES ('${role}', '${roleSal}', '${roleDept}')`;
    //jquery must be seperate cannot do all inone
    db.query(query, function (err, res){
      console.table(res)
      startMenu()
  })
})
};
function addEmp() {
  inquirer
  .prompt ([{
    type: 'input',
    message: "Add employee's first name",
    name: 'newEmpFN'
  },
  {
    type: 'input',
    message: "Add employee's last name",
    name: 'newEmpLN'
  },
  {
    type: 'input',
    message: "Add employee's role id",
    name: 'newEmpR'
  },
  {
    type: 'input',
    message: "Add the magager's id who the new employee will report to",
    name: 'newEmpM'
  }
])
  .then(function (res){
    const fName = res.newEmpFN;
    const lName = res.newEmpLN;
    const roleID = res.newEmpR;
    const manID = res.newEmpM;
    const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${fName}', '${lName}', '${roleID}', '${manID}')`;
    db.query(query, function (err, res){
      console.table(res)
      startMenu()
  })
})
};

function updateEmp() {
  inquirer
  .prompt ([
    {
    type: 'input',
    message: 'Choose an employee to update role(id)',
    name: 'updEmp'
  },
  {
    type: 'input',
    message: 'Choose an role(id) for that employee',
    name: 'updRole'
  }
])
.then(function (res) {
  const empU = res.updEmp;
  const roleU = res.updRole; 
  const query = `UPDATE employee SET role_id = "${roleU}" WHERE id = "${empU}"`;
  db.query(query, function (err, res){
    console.table(res);
    startMenu();
  })
})
};

startMenu();