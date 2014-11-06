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

}); //end ready