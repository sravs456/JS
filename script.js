function validate(){
    var id= document.getElementById("name").value;
    var pass= document.getElementById("password").value;
    if(id=="sravani" && pass=="16PQ" )
    {
        alert("logged in successfully");
        return false;
    }
    else
    {
        alert("enter right credentials");
    }
}