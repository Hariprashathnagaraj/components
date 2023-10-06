function calculatePaySlip() {
    const employeeName = document.getElementById('employee-name').value;
    const basicSalary = parseFloat(document.getElementById('basic-salary').value);
    const allowance = parseFloat(document.getElementById('allowance').value);
    const deduction = parseFloat(document.getElementById('deduction').value);
  
    const grossSalary = basicSalary + allowance;
    const netSalary = grossSalary - deduction;
  
    const paySlipResult = document.getElementById('pay-slip-result');
    paySlipResult.innerHTML = `
      <h3>Pay Slip for ${employeeName}</h3>
      <p><strong>Basic Salary:</strong> $${basicSalary.toFixed(2)}</p>
      <p><strong>Allowance:</strong> $${allowance.toFixed(2)}</p>
      <p><strong>Gross Salary:</strong> $${grossSalary.toFixed(2)}</p>
      <p><strong>Deduction:</strong> $${deduction.toFixed(2)}</p>
      <p><strong>Net Salary:</strong> $${netSalary.toFixed(2)}</p>
    `;
  }
   