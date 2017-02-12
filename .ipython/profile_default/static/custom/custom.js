//------ HOME CHANGES --------------------------

$("div.list_item div div.item_buttons div.running-indicator:not([style='visibility: hidden;'])").parents('div.list_item').css('background-color', '#DEEEDE');


//------ NOTEBOOK CHANGES ----------------------

// Switch Jupyter logo to smaller one:
document.querySelector('.nav a img').setAttribute('src', 'http://blog.jupyter.org/content/images/2015/02/jupyter-sq-02.png');


// document.querySelector('.running_notebook_icon')
$('.running_notebook_icon').parent().css('background-color', '#DCF9CF');

// ADD THE SPINNER:
$('.running').find('.prompt.input_prompt').html('<i class="demo-icon icon-spin3 animate-spin"></i>');
// $('.running').find('.prompt.input_prompt').html('<i class="demo-icon icon-spin2 animate-spin"></i>');
// $('.running').find('.prompt.input_prompt').html('<i class="demo-icon icon-spin5 animate-spin"></i>');
