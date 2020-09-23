function run() {
    var a = document.getElementsByName("name_input")[0].value;
    document.getElementById('firstname').innerHTML=a;
    var b = document.getElementsByName("name_input")[1].value;
    document.getElementById('lastname').innerHTML=b;
    var c = document.getElementsByName("name_input")[2].value;
    document.getElementById('age').innerHTML=c;

    if (a.length > 5) {
        document.getElementById('firstname').style.color = "green"
    } else {
        document.getElementById('firstname').style.color = "red"
    }
}

document.getElementById("submit").addEventListener("click",run,false);