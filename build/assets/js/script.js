// /* Your JavaScript goes here */
// (function() {

// var visa = $('input#visa');
// var amex = $('input#amex');
// var discover = $('input#discover');
// var mastercard = $('input#mc');

// 	 	$.
// 	 	fn.checked = function(value) {
	        
// 	        if(value === true || value === false) {
// 	            $(this).each(function(){ 
// 	            	this.checked = value; 
// 	            });
	            
// 	        } 
// 	    };




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


		});

	// 		if (result.card_type.name === 'amex') {
	// 			alert("this is american express");
	// 		}
	// 		else if (result.card_type.name === 'visa') {
	// 			alert("this is visa");
	// 		}
	// 		else if (result.card_type.name === 'discover') {
	// 			alert("this is discover");
	// 		}
	// 		else if (result.card_type.name === 'mastercard') {
	// 			alert("this is mastercard");
	// 		}

	// 	});
	// });