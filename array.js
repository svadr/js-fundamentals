/**
 * Here we have an array of employees with their ids, names, and id of line manager.
 * The task is to create a function that should take initial array and id of employee and
 * return an array of all managers id in hierarchy.
 * 
 * How it should work:
getManagers(employees, 200) should return array of managers ids in hierarchy [50, 73, 11]

getManagers(employees, 11) should return [11]

if there is no managers - than should return empty array []
 */

const employees = [
  { employeeId: 11, name: "John", managerId: 11 },
  { employeeId: 50, name: "Todd", managerId: 73 },
  { employeeId: 150, name: "Alex", managerId: 200 },
  { employeeId: 73, name: "Sara", managerId: 11 },
  { employeeId: 200, name: "Alex", managerId: 50 },
  { employeeId: 100, name: "Alex", managerId: 150 },
];

function getManagers(employees, id) {
  const result = [];

  function findManager(id) {
    const targetEmployee = employees.find((item) => item.employeeId === id);
    if (!targetEmployee) return;

    if (targetEmployee.managerId !== id) {
      result.push(targetEmployee.managerId);
      findManager(targetEmployee.managerId);
    } 
  }

  findManager(id);
  return result;
}

console.log("Managers of 200:", getManagers(employees, 200));
