$(document).ready( function() {
    $("#table").hide();
    $("input").keyup(function (e) {
        if(e.originalEvent.key == "Enter") {
            $("#table").hide();
            if(e.currentTarget.value <= 0) {
                alert("El salario debe ser un número positivo");
                return false;
            }
            console.log("handle");
            let result = calculate(e.currentTarget.value);
            $("#salario").text(result.originalSalary);
            $("#irpf").text(result.taxes);
            $("#neto").text(result.netSalary);
            $("#ratio").text(result.ratio + " %");
            $("#table").show();
        }
    })
});


let tramos = [
    {
        qty: 300000,
        tax: 0.47
    },
    {
        qty: 60000,
        tax: 0.45
    },
    {
        qty: 35200,
        tax: 0.37
    },
    {
        qty: 20200,
        tax: 0.30
    },
    {
        qty: 12450,
        tax: 0.24
    },
    {
        qty: 0,
        tax: 0.19
    }
];
function calculate (salary) {
    console.log("calc");
    let taxes = 0;
    let amount = 0;
    let originalSalary = salary;
    for (let tramo of tramos) {
        if(salary > tramo.qty){
            amount = salary - tramo.qty;
            taxes += amount * tramo.tax;
            salary = tramo.qty;
        }
    }
    let ratio = taxes * 100 / originalSalary;
    return {
        originalSalary: originalSalary,
        taxes: taxes.toFixed(2).toString(), 
        ratio: ratio.toFixed(2).toString(),
        netSalary: (originalSalary-taxes).toFixed(2).toString()
    };
}
