	    $('#Card_Number').validateCreditCard(function(result){

			if(result.card_type.name === 'amex'){
				$("#amex").prop("checked", true); 
			}
			else if(result.card_type.name === 'visa'){
				$("#visa").prop("checked", true); 
			}
			if(result.card_type.name === 'discover'){
				$("#discover").prop("checked", true); 
			}
			if(result.card_type.name === 'mastercard'){
				$("#mc").prop("checked", true); 
			}
			if(result.card_type.name === 'amex'){
				$("#csv").addClass('input#csv:checked + label')


		});
