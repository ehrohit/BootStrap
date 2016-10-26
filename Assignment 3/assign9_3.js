$(document).ready (function() {
    
    var contacts=[];
    $("#submitid").on("click",function(){ // function to handle the display of form elements in modal
        var name = $("#nameid").val();
        console.log("name is "+ name);
        var email = $("#emailid").val();
        console.log("Email id"+ email);
        var contact = $("#contactno").val();
        console.log ("contacr number"+ contact);
        var connect=[name,email,contact];
        contacts.push(connect);
        $("#myModal").modal('show');
        var table= document.getElementById("tablebody");
        document.getElementById("tablebody").innerHTML="";
        
        for(var i=0;i<contacts.length;i++)
            {
                var rows = table.insertRow(i);
                for(var j=0;j<contacts[i].length;j++){
                    console.log(contacts[i]);
                    var cell=  rows.insertCell(j);
                    cell.innerHTML=contacts[i][j];
                }
            }
        return false;
    });
});