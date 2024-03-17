// hide the placeholder when input is pressed.
$("input").each(
    function(){
        $(this).data('holder',$(this).attr('placeholder'));
        $(this).focusin(function(){
            $(this).attr('placeholder','');
        });
        $(this).focusout(function(){
            $(this).attr('placeholder',$(this).data('holder'));
        });
});

$(".btn").click(function() { // when button is pressed ...:
    const amount = document.querySelector(".input"); // amount equals to input....
    const value = amount.value * 0.15; // the value is 15% of the input.....

    $("h1").text(`Your tip should be at least $ ${value.toFixed(2)}`);
    $("h2").remove();
    $("h3").remove();
});
