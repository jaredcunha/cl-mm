/* Infield Form Labels =================================================================*/
$(document).ready(function(){
			var innerLabel = $('label.field-label');
			var innerLabelInput = $('.form-field input');
			innerLabel.each(function() {
				var stolen = $(this).text();
				var sibValue = $(this).siblings('input').val();
				if (sibValue!==''){
					$(this).siblings('input').attr('value', sibValue);
				}else{
					$(this).siblings('input').attr('value', stolen);
				}
			});
			innerLabelInput.addClass('empty');
			innerLabelInput.focus(function() { 
				if (this.value === this.defaultValue){
					this.value = '';
					$(this).addClass('empty'); 
				} 
				if(this.value !== this.defaultValue){ 
					this.select();
					$(this).removeClass('empty');
				} 
			}); 
			innerLabelInput.blur(function() { 
				if (this.value === ''){ 
					this.value = this.defaultValue; 
					$(this).addClass('empty');
				}
			});
});