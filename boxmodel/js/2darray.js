let std = [
    ["Hala", "Cpism", "Intermediate", "3-5", 8600],
    ["Afifa", "Cpism", "Matriculate", "3-5", 8600],
    ["Yumna", "Cpism", "Intermediate", "3-5", 8600],
    ["Rija", "Cpism", "Intermediate", "3-5", 8600],
    ["Abdul Basit", "Cpism", "Intermediate", "3-5", 8600],
    ["Musab", "Cpism", "Intermediate", "3-5", 8600],
    ["Yusha", "Cpism", "Intermediate", "3-5", 8600],
    ["Mansoor", "Cpism", "Intermediate", "3-5", 8600],
    ["Abdul Haq", "Cpism", "Intermediate", "3-5", 8600],
    ["Zohaib", "Cpism", "Intermediate", "3-5", 8600],
    ["Ali", "Cpism", "Intermediate", "3-5", 8600],
    ["Asad", "Cpism", "Intermediate", "3-5", 8600],
    ["Awais", "Cpism", "Intermediate", "3-5", 8600],
    ["Alina", "Cpism", "Intermediate", "3-5", 8600],
    ["Aiman", "Cpism", "Intermediate", "3-5", 8600],
]

const table = document.getElementById("table");

for (let i = 0; i < std.length; i++) {

    const row = document.createElement("tr");
    for (let j = 0; j < std[i].length; j++) {
        const cell = document.createElement("td");
        cell.textContent = std[i][j];
        row.appendChild(cell);
    }
    table.appendChild(row);
}