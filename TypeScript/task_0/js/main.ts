interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Dupont',
  age: 20,
  location: 'Paris',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Martin',
  age: 22,
  location: 'Lyon',
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const tdFirstName: HTMLTableCellElement = document.createElement('td');
  tdFirstName.textContent = student.firstName;

  const tdLocation: HTMLTableCellElement = document.createElement('td');
  tdLocation.textContent = student.location;

  row.appendChild(tdFirstName);
  row.appendChild(tdLocation);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);