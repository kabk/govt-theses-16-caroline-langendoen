$(expression).on(types, null, keys, handler);
$(expression).off(types, handler);

$(document).on('keydown', null, 'ctrl++', fn);

// e.g. replace '$' sign with 'EUR'
$('input.foo').on('keyup', null, '$', function(){
  this.value = this.value.replace('$', 'EUR');
});     