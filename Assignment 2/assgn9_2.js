
var Name,Email,Contact;
$(document).ready(function(){
    
     var contacts = {"Name": "","Email": "","Contactno": ""};
     var details = [];
    
    
    $("#submitid").on("click",function(){
        var Name = $("#name").val();
        contacts.Name=Name;
        console.log("Name is "+ Name);
        var Email = $("#emailid").val();
        contacts.Email=Email;
        console.log("Email is "+Email);
        var Contact = $("#contactno").val();
        contacts.Contactno=Contact;
        details.push(contacts); // creating the array of objects 
        
        
        
        $("#tableid").css("display","block");
     
        var newRow = "<tr><td>"+ Name +"</td> <td>"+ Email + "</td> <td>"+ Contact + "</td> <td>"; 
        $("table tbody").append(newRow + "<p data-placement=" +"top" + "data-toggle="+ "tooltip" + "title="+ " Edit" + "><"+ "button class="+ "btn btn-primary btn-xs" + "data-title=" +"Edit" + "data-toggle=" + "modal" + "data-target=" + "#edit" + "><span class=" + 
"glyphicon glyphicon-pencil" + "></span></button></p></td> </tr>");// Adding new row in the table
        
        return false;
        
        });
    
     $("#editbutton").on("click",function(){ // function to handle the value of the submitted form in the modal
     console.log("Details has "+details + "Length of setails "+ details.length);
         
    var x;
    for (var i = 0; i < details.length; i++) {
       
        for (x in details[i])
            {
               console.log(x);
            console.log("Customer contact infor"+ details[i][x]);  
                if(x=="Name")
                  {
                   var nameOfCustomer= details[i][x];
                      console.log("1"+nameOfCustomer);
                   }
                 if(x=="Email")
                  {
                   var mailOfCustomer= details[i][x];
                      console.log("2"+mailOfCustomer);
                   }
                 if(x=="Contactno")
                  {
                   var contactOfCustomer= details[i][x];
                      console.log("3"+ contactOfCustomer);
                   }
                
            }
    }
         
         console.log("Name"+nameOfCustomer+"Email"+mailOfCustomer+"Contact no"+contactOfCustomer);
        
         $("#nameid").val(nameOfCustomer);
         $(".modal-body #emailid").val("sachdevarohit@gmail.com");
         $(".modal-body #contactno").val(contactOfCustomer);
       
        
        });
    
    });