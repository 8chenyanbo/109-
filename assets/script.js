// 匯出 CSV
function exportCSV(tableId = "grades-table") {
  const rows = document.querySelectorAll(`#${tableId} tr`);
  let csv = "";
  rows.forEach(row => {
    const cells = row.querySelectorAll("th, td");
    const rowData = Array.from(cells).map(cell => cell.textContent).join(",");
    csv += rowData + "\n";
  });
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "grades.csv";
  a.click();
}

// 匯出 PDF（佔位）
function exportPDF() {
  alert("匯出 PDF 功能尚未啟用");
}

// 分數顏色提示
function highlightScores(tableId = "grades-table") {
  document.querySelectorAll(`#${tableId} tbody tr`).forEach(row => {
    const scoreCell = row.cells[1];
    const score = parseInt(scoreCell.textContent || scoreCell.querySelector("input")?.value || 0);
    if (score >= 90) {
      scoreCell.style.color = "green";
      scoreCell.style.fontWeight = "bold";
    } else if (score < 60) {
      scoreCell.style.color = "red";
      scoreCell.style.fontWeight = "bold";
    }
  });
}

// 科目切換
function filterSubject(subject, tableId = "grades-table") {
  document.querySelectorAll(`#${tableId} tbody tr`).forEach(row => {
    if (subject === "all" || row.cells[0].textContent === subject) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

// 權限提示
function showRole(seat) {
  const roleBox = document.createElement("div");
  roleBox.style.position = "fixed";
  roleBox.style.bottom = "16px";
  roleBox.style.right = "16px";
  roleBox.style.background = "#FB7185";
  roleBox.style.color = "white";
  roleBox.style.padding = "6px 10px";
  roleBox.style.borderRadius = "6px";
  roleBox.textContent = seat === "114129" ? "目前權限：管理員" : "目前權限：學生";
  document.body.appendChild(roleBox);
}
