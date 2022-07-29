const students = [
    {
        "name": "Raj",
        "id": 1,
        "course": "B.tech",
        "sem": "II",
        "marks": {
            "english": 81,
            "maths": 85,
            "science": 24,
        },
    },
    {
        "name": "Rohit",
        "id": 2,
        "course": "B.tech",
        "sem": "II",
        "marks": {
            "english": 86,
            "maths": 65,
            "science": 74,
        },
    },
];

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

function createStudentRow() {
    let student = students[0];
    document.getElementById("studentData").innerHTML =
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
        "</tr>";
}

createStudentRow();
