    
$('#Card_Number').validateCreditCard(function(result){

				$("#" + result.card_type.name).prop("checked", true);

			showAmex();
		});
    

function showAmex(){
	var security = $('.csv-sprite');
	if($('#amex').is(':checked')){
		security.addClass('amex');
	} else{security.removeClass('amex');
}
}