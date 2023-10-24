textbox_value = document.getElementById( "input" )
function addinput( inputvalue )
{
    textbox_value.value += inputvalue

}
function findoutput()
{
    result = eval( textbox_value.value )
    textbox_value.value = ""
    textbox_value.value += result
}
function clear_input()
{
    textbox_value.value = ""
}

function take_input( event )
{
    keyboard_input = event.target.value
    textbox_value.value = eval( keyboard_input )


}
