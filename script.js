$(document).ready(function(){
    let student="";
    $.ajax({
        type: "POST",
        url: "http://localhost/14G/Backend2/studentlist.php",
        success: function(response){
            let jsonData = JSON.parse(response);
            console.log(jsonData);
            let number = 1;
            $.each(jsonData, function(key, value){
                student+='<tr>';
                student+='<td>'+number + '</td>';
                student+='<td>'+value.name + '</td>';
                student+='<td>'+value.surname + '</td>';
                student+='<td>'+value.birthdate + '</td>';
                student+='<td>'+value.gender + '</td>';
                student+='<td>'+value.class + '</td>';
                student+='</tr>';

            });
            $('table#students tbody').html(student);
        },
        error:function(){}
        
    });
    //$('#searchbutton').click(function(event){
    $('#search').on("change keyup paste",function(event){
        event.preventDefault();
        let sn = $('#search').val(); //input mező tartalmának a leszedése.
        $('table#students tbody').html("");
        student="";
        $.ajax({
            type: "POST",
            url: "http://localhost/14G/Backend2/studentsearch.php",
            data: {'sn':sn},
            success: function(response){
                let jsonData = JSON.parse(response);
                //console.log(jsonData);
                if(jsonData["message"]){
                    $('div.alert').show();
                    $('table#students').hide();
                } else {
                    $('div.alert').hide();
                    $('table#students').show();
                    let number = 1;
                    $.each(jsonData, function(key, value){
                        student+='<tr>';
                        student+='<td>'+number + '</td>';
                        student+='<td>'+value.name + '</td>';
                        student+='<td>'+value.surname + '</td>';
                        student+='<td>'+value.birthdate + '</td>';
                        student+='<td>'+value.gender + '</td>';
                        student+='<td>'+value.class + '</td>';
                        student+='</tr>';

                    });
                    $('table#students tbody').html(student);
                }
            },
            error:function(){}
            
        });
    });
});