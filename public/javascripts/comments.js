var url = "http://localhost:3000";

function addComment() {
    var writer = $("#writer").val();
    var comment = $("#comment").val();
    var data = {
        "writer": writer,
        "comment": comment
    };
    
    $.ajax({
        url: url + "/comments/add",
        dataType: 'json',
        type: 'POST',
        data: data,
        error : function(error) {
            alert("Error!");
        },
        success : function(data) {
            alert("success!");
        },
        complete : function() {
            //  alert("complete! after success");    
        }
  });
}