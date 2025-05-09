// Requires jQuery

// Initialize slider:
$(document).ready(function() {
    $(".noUi-handle").on("click", function() {
        $(this).width(50);
    });
    var rangeSlider = document.getElementById("slider-range");
    if (rangeSlider) {
        var moneyFormat = wNumb({
            decimals: 0,
            thousand: ",",
            prefix: "$",
        });
        noUiSlider.create(rangeSlider, {
            start: [500, 4000],
            step: 1,
            range: {
                min: [0],
                max: [9000],
            },
            format: moneyFormat,
            connect: true,
        });

        // Set visual min and max values and also update value hidden form inputs
        rangeSlider.noUiSlider.on("update", function(values, handle) {
            $("#price-from").html(values[0]);
            $("#price-to").html(values[1]);
            $(".min-value").val(moneyFormat.from(values[0]));
            $(".max-value").val(moneyFormat.from(values[1]));
        });
    }
});