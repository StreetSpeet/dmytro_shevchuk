$(document).ready(function () {
    $(".dws-progress-bar").circularProgress({
        color: "#25ffe4",
        line_width: 17,
        height: "350px",
        width: "350px",
        percent: 0,
        // counter_clockwise: true,
        starting_position: 0
    }).circularProgress('animate', 100, 2000);
});
