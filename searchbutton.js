var term;

//window.onload = getterm;
window.onload = searching;

function getterm() {
    term = $("term").value;
}
function searching() {
    $("search").addEventListener("click", function() {
        new Ajax.Request("request.php?q=" + term, {
            method: "get",
            onSuccess: alertresult}
        )}
    );
    
}

function alertresult(data) {
    alert(data.responseText);
}
