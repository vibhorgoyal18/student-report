const students = [];

function getStudents() {
    const student = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        course: document.getElementById("course").value,
        sem: document.getElementById("sem").value,
        marks: {
            maths: document.getElementById("maths").value,
            english: document.getElementById("english").value,
            science: document.getElementById("science").value,
        },
    };
    student.percent = Math.floor(
        (parseInt(student.marks.maths) +
            parseInt(student.marks.english) +
            parseInt(student.marks.science)) /
            3
    );
    students.push(student);
    console.log(student);
    createStudentRow();
}

function createStudentRow(studentFilter = students) {
    let tableData = studentFilter.map(
        (student) =>
            "<tr>" +
            `<td>${student.id}</td>` +
            `<td>${student.name}</td>` +
            `<td>${student.course}</td>` +
            `<td>${student.sem}</td>` +
            `<td ${student.marks.maths < 33 ? "class= 'text-danger'" : ""}>${
                student.marks.maths
            }</td>` +
            `<td ${student.marks.english < 33 ? "class= 'text-danger'" : ""}>${
                student.marks.english
            }</td>` +
            `<td ${student.marks.science < 33 ? "class= 'text-danger'" : ""}>${
                student.marks.science
            }</td>` +
            `<td>${student.percent}%</td>` +
            "</tr>"
    );
    document.getElementById("studentData").innerHTML = tableData.join("");
}

function filterStudents(dropdown) {
    const selectedOption = dropdown.selectedIndex;
    const selectedValue = dropdown.options[selectedOption].value;
    switch (selectedValue) {
        case "all":
            createStudentRow(students);
            break;
        case "pass":
            const pass = students.filter(
                (student) =>
                    student.marks.maths > 32 &&
                    student.marks.english > 32 &&
                    student.marks.science > 32
            );
            createStudentRow(pass);
            break;
        case "fail":
            const fail = students.filter(
                (student) =>
                    student.marks.maths <= 32 ||
                    student.marks.english <= 32 ||
                    student.marks.science <= 32
            );
            createStudentRow(fail);
            break;
        default:
            console.log("Invalid filter!");
    }
}
