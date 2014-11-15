$(document).ready(function(){

	$('#Londonpic').hover(function(){
			$('#Londonpic').attr({
				'src' : 'img/London 2.jpg',
				'class' : 'img-responsive img-circle'
			}); //end attr
		}, //end mouse over
	function(){
				$('#Londonpic').attr({
					'src' : 'img/London.jpg',
					'class' : 'img-responsive'
				}); //end attr
		}); //end London img hover

	$('#Londonpic').click(function(){
		$('#Londonpic').animate({
			opacity: '0.25',
			height: 'toggle'
		}, 'swing');
		 // end animate
	}); //end Londonpic click
	
	$('#SeattlePier').hover(function(){
			$('#SeattlePier').attr({
				'src' : 'img/Seattle Pier.jpg',
				'class' : 'img-responsive img-circle'
			}); //end attr
		}, //end mouse over
	function(){
				$('#SeattlePier').attr({
					'src' : 'img/Seattle.jpg',
					'class' : 'img-responsive'
				}); //end attr
		}); //end Seattle img hover

	$('#SeattlePier').click(function(){
		$('#SeattlePier').animate({
			opacity: '1',
			height: 'toggle'
		}, 2000, 'swing');
		 // end animate
	}); //end SeattlePier click
	
	$('#Montreal2').hover(function(){
			$('#Montreal2').attr({
				'src' : 'img/Montreal 2.jpg',
				'class' : 'img-responsive img-circle'
			}); //end attr
		}, //end mouse over

	function(){
				$('#Montreal2').attr({
					'src' : 'img/Montreal.jpg',
					'class' : 'img-responsive'
				}); //end attr
		}); //end Montreal img hover

	$('#Montreal2').click(function(){
		$('#Montreal2').animate({
			opacity: '1',
			height: 'toggle'
		}); // end animate
	}); //end SeattlePier click

	$('#Londonbtn').click(function(){
		$('#Londonbtn').css({
			backgroundColor: 'green'
		}); //end London btn css
	}); //end London btn click

	$('#Tourist-btn').click(function(){
		$('#Tourist-img').animate({
			opacity: '0.25',
			height: 'toggle'
		}); //end Tourist animate
	}); //end Tourist click

	$('p:even').css({
		color: "white",
		backgroundColor: "brown"
	}); //end p css

	$('#Fade').fadeOut(1000).fadeIn(1000);

	$('#state-select').change(function(){
		if ($('#state-select').val() === 'MA')
			{
				$('.state-group .help-block').text('Lucy lives there too!');
		} else if ($('#state-select').val() === 'CT') 
		{
			$('.state-group .help-block').text('Lucy used to live there!');
		} else {
			$('.state-group .help-block').text(' ');
		}
	}); //end change


	$('#name').focusout(function(){
		if($('#name').val().length == 0) {
			$('.name-group .help-block').text('Please enter your name.');
			$('.name-group').attr({
				class: 'col-sm-4 form-group name-group has-error'
			}); // end attr
		} else {
			$('.name-group .help-block').text('');
			$('.name-group').attr({
				class: 'col-sm-4 form-group name-group'
			}); //end attr
		}
	}); //end focus out

	$('#Form-btn').click(function(submit){
		if($('#name').val().length == 0) {
			$('.name-group .help-block').text('Please enter your name before submitting.');
			$('.name-group').attr({
				class: 'col-sm-4 form-group name-group has-error'
			}); // end attr
			submit.preventDefault();
		} else {
			$('#myModal').modal();
		    submit.preventDefault();
		}
	}); //end click
}); //end ready




