key_input.onkeydown = key_input.onkeyup = key_input.onkeypress = handle;
function handle(e) {
    alert('Key= ' + e.key + ', Code:' + e.code);
    e.preventDefault();
}


