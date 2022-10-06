$('#boton').click(()=>{
   
    $("#lista").empty();
        
        $.get(`http://localhost:5000/amigos`,function(data){//.get es una promesa, osea en
    console.log(data);
    
    data.forEach(obj=> 
        $(`<li id="${obj.id}"> 
                       Name:${obj.name}
    
           </li>`).appendTo('ul'))
           
           $("img").hide()
           
    })

})

$('#search').click(()=>{
   
   $("#amigo").empty(); //al hacer click borra lo que hay en el input
    let input=$('#input');
   
    $.get(`http://localhost:5000/amigos/${input[0].value}`,function(data){

        
    $(`<span id=${data.id}>
    
    amigo:${data.name}
    
    </span>`).appendTo('#amigo')

    })
    input[0].value="";
})



$('#delete').click(()=>{
    $("#success").empty();
     let input=$('#inputDelete');
    
     $.ajax({
        url:`http://localhost:5000/amigos/${input.val()}`,
        type:'DELETE',
        
        success: (data)=>{
            $(`<span>
                borrado
            </span`).appendTo("#success")
            }
        })
            input[0].value="";

    })

