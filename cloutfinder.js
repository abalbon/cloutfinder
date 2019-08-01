function nextUser() {
    console.log("Button is pressed");
    
    $(document).ready(function() {
        let num = $('#userHeader').data("stein-offset") + 1;
        console.log(num);
        $('#userHeader').data('stein-offset', num);
    })
    
    console.log($('#userHeader').data("stein-offset"));
};
