//Print Quote Div
function printDiv(divName, link = "printQuote") {
    let printContents = document.getElementById(divName).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;

    document.getElementById(link).addEventListener("click", () => printDiv(divName));
}

document.getElementById("printQuote").addEventListener("click", () => printDiv("result-div"));
