interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const mohammad: Student = {
  firstName: "Mohammad",
  lastName: "Ali",
  age: 20,
  location: "Cairo"
}

const salah: Student = {
  firstName: "Salah",
  lastName: "Maher",
  age: 19,
  location: "Alexandria"
}

const studentsList: Student[] = [mohammad, salah];

// Create table
const table = document.createElement('table');
const headerRow = document.createElement('tr');

// Create headers
const nameHeader = document.createElement('th');
nameHeader.textContent = 'First Name';
headerRow.appendChild(nameHeader);

const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';
headerRow.appendChild(locationHeader);

table.appendChild(headerRow);

// Append students to table
studentsList.forEach(student => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;
  row.appendChild(nameCell);

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  table.appendChild(row);

  // Apply styling
  nameCell.style.border = '1px solid black';
  nameCell.style.padding = '10px';
  locationCell.style.border = '1px solid black';
  locationCell.style.padding = '10px';
});

// Apply styling
table.style.width = '100%';
table.style.borderCollapse = 'collapse';

nameHeader.style.border = '1px solid black';
nameHeader.style.padding = '10px';
locationHeader.style.border = '1px solid black';
locationHeader.style.padding = '10px';


document.body.appendChild(table);
