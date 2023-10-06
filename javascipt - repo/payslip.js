
        var JSONCreate = JSON.parse(localStorage.getItem('jsoncreate'));    
        var JSONPay = JSON.parse(localStorage.getItem('paydetails'));
        var name = JSONCreate.employeeN;
        document.getElementById("empname").innerHTML = name;
        var aa = JSONCreate.employeAddress;
        document.getElementById("bb").innerHTML = aa;
        var cc = JSONCreate.employeeI;
        document.getElementById("dd").innerHTML = cc;
        var ee = JSONCreate.salaryD;
        document.getElementById("ff").innerHTML = ee;
        var gg = JSONCreate.salaryAmount;
        document.getElementById("hh").innerHTML = gg;
        var salDetail=JSONPay.regularE;
        document.getElementById("jj").innerHTML=salDetail;
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>