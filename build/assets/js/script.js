    
$('#Card_Number').validateCreditCard(function(result){

				if (result.card_type === null){ $('.cc input').prop("checked",false)
			}
				else{ 
					$("#" + result.card_type.name).prop("checked", true);
			showAmex();}

		});
    

function showAmex(){
	var security = $('.csv-sprite');
	if($('#amex').is(':checked')){
		security.addClass('amex');
	} else{security.removeClass('amex');
}
}