

$(function () {
 
    $('.saveBtn').on('click', function () {
        localStorage.setItem($(this).parent().attr('id'), $(this).siblings(".description").val())
    })

    currentTime = dayjs().format("HH")
    console.log(currentTime)

    hours= ["#hour-9","#hour-10","#hour-11","#hour-12","#hour-13","#hour-14","#hour-15","#hour-16","#hour-17"]

    for (let i=0;i<hours.length;i++ ){
        time = parseInt($(hours[i]).attr("id").substring(5))
        if (time == currentTime){
            // set color to present
           $(hours[i]).addClass("present");
       } else if (time < currentTime){
           // set color to future
           $(hours[i]).addClass("past");
       } else if (time > currentTime){
            // set color to past
           $(hours[i]).addClass("future");
       }
    }


    $("#hour-9 textarea").text(localStorage.getItem("hour-9"));
    $("#hour-10 textarea").text(localStorage.getItem("hour-10"));
    $("#hour-11 textarea").text(localStorage.getItem("hour-11"));
    $("#hour-12 textarea").text(localStorage.getItem("hour-12"));
    $("#hour-13 textarea").text(localStorage.getItem("hour-13"));
    $("#hour-14 textarea").text(localStorage.getItem("hour-14"));
    $("#hour-15 textarea").text(localStorage.getItem("hour-15"));
    $("#hour-16 textarea").text(localStorage.getItem("hour-16"));
    $("#hour-17 textarea").text(localStorage.getItem("hour-17"));

    // TODO: Add code to display the current date in the header of the page.
    $("#currentDay").text(dayjs().format("dddd, MMMM DD, YYYY"));
});








