/* Infield Form Labels =================================================================*/
$(document).ready(function(){
			var innerLabel = $('label.field-label');
			var innerLabelInput = $('.form-field input');
			innerLabel.addClass("place-infield");

			innerLabelInput.each(function() {
			    if( $(this).val() ){ 
					$(this).prev(innerLabel).removeClass("place-infield"); 
				}
			});


			innerLabelInput.focus(function() { 
				if( !$(this).val() ){ 
					this.select();
					$(this).prev(innerLabel).removeClass("place-infield"); 
				} 
			}); 
			innerLabelInput.blur(function() { 
				if (this.value === ''){ 
					//this.value = this.defaultValue;
					$(this).prev(innerLabel).addClass("place-infield"); 
				}
			});
});