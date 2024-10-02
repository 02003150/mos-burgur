function BtnAdd(){
    var No=document.getElementById("txtNo").value;
    var name=document.getElementById("txtName").value;
    var item=document.getElementById("txtItem").value;
    var phoneNumber=document.getElementById("txtPhoneNumber").value;

    var table=document.getElementById("tblCustomer");
    var row=table.insertRow(1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);

    cell1.innerHTML=No;
    cell2.innerHTML=name;
    cell3.innerHTML=item;
    cell4.innerHTML=phoneNumber;


    document.getElementById("txtForm").reset(0);
}

function BtnDelete(){
    document.getElementById("tblCustomer").deleteRow(0);
}






