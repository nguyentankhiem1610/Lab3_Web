var table;
var tbody;

document.addEventListener("DOMContentLoaded", function () {
    createTable();
    addRow();

    var addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click", addRow);
});

function createTable() {
    var container = document.getElementById("tableContainer");

    table = document.createElement("table");

    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");

    var headers = ["STT", "Họ và tên", "Điểm TB", "Chuyên ngành", "Xóa"];

    for (var i = 0; i < headers.length; i++) {
        var th = document.createElement("th");
        th.textContent = headers[i];
        headerRow.appendChild(th);
    }

    thead.appendChild(headerRow);
    table.appendChild(thead);

    tbody = document.createElement("tbody");
    table.appendChild(tbody);

    container.appendChild(table);
}

function addRow() {
    var rowCount = tbody.rows.length;
    var newSTT = rowCount + 1;

    var tr = document.createElement("tr");

    var tdSTT = document.createElement("td");
    tdSTT.textContent = newSTT;
    tr.appendChild(tdSTT);

    var tdName = document.createElement("td");
    var inputName = document.createElement("input");
    inputName.type = "text";
    tdName.appendChild(inputName);
    tr.appendChild(tdName);

    var tdScore = document.createElement("td");
    var inputScore = document.createElement("input");
    inputScore.type = "number";
    inputScore.step = "0.1";
    tdScore.appendChild(inputScore);
    tr.appendChild(tdScore);

    var tdMajor = document.createElement("td");
    var inputMajor = document.createElement("input");
    inputMajor.type = "text";
    tdMajor.appendChild(inputMajor);
    tr.appendChild(tdMajor);

    var tdDelete = document.createElement("td");
    var btnDelete = document.createElement("button");
    btnDelete.textContent = "X";

    btnDelete.onclick = function () {
        deleteRow(btnDelete);
    };

    tdDelete.appendChild(btnDelete);
    tr.appendChild(tdDelete);

    tbody.appendChild(tr);
}

function deleteRow(btn) {
    var tr = btn.parentNode.parentNode;
    tr.remove();

    for (var i = 0; i < tbody.rows.length; i++) {
        tbody.rows[i].cells[0].textContent = i + 1;
    }
}
