crud = [];
crud.database = {};

const loadAssets = function () {
    $.getJSON("/crud/", function (data) {
        crud.database = data;
        console.log(data);
        crud.init();

    })
}
crud.init = function () {
    crud.update ();
    crud.new();
    crud.delete();
    crud.generateMarkup()
};
crud.new = function(){
    $(".new").on("click", function (){
        // console.log(id._id);
        $("#addcrud").show();
        window.location = '/crud'
    })
}
crud.update = function (){
    $(".update").on('click', function (){
        $('#addU').show()
        $('#addU').submit(function (e){
            e.preventDefault();
            $.post({
                url : "/crud/" +id._id,
                type: "PUT",
                data:{
                    fullName : $('#add1').val(),
                    emailId : $('#add2').val(),
                    phoneNumber:$('#add3').val(),
                    address : $('#add4').val(),
                    image : $('#add5').val()
                }
            });
            window.location = '/home'
        });
    });
}



crud.delete= function (){
    $(".delete").on("click", function (){
        // console.log(id._id)
        url = "/crud/" +id._id;
        $.post({
            url: url,
            method: "DELETE"
        });
        window.location = '/home'
        

    })
}

crud.generateMarkup = function () {
    var template = "";

    $.each(crud.database, function (index) {
        db = crud.database;
        id = db[index];
        // console.log(id);

        template += '<div class="card" style="width: 18rem;">'
        template += '<img class="card-img-top" src="'+id.image+'" alt="Card image cap">'
        template += '<div class="card-body">'
        template += '<h5 class="card-title">'+id.fullName+'</h5>'
        template += '<p>'+id.emailId+'</p>'
        template += '<p>'+id.phoneNumber+'</p>'
        template += '<p>'+id.address+'</p>'
        template += '<button class="update btn btn-primary">Update crud</button>'
        template += '<button class="delete btn btn-primary">Delete</button>'
        template += '</div>'
        template += '</div>'

    })
    $(".content").append(template);
    crud.delete();
    crud.new ();
    crud.update();
}
loadAssets();