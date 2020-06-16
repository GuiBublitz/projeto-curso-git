$(function(){
	//Aqui vai todo código de javascript.
	$('nav.mobile').click(function(){
		//O que vai acontecer quando clicarmos na nav mobile!
		var listaMenu = $('nav.mobile ul');
		//listaMenu.slideToggle();//Abrir menu sem if e com outro efeito
			
			//Abrir menu através do fedein
			/*
			if(listaMenu.is(':hidden')== true){
				listaMenu.fadeIn();
			}
			else{
				listaMenu.fadeOut();
			}
			*/
		if(listaMenu.is(':hidden') == true){
			var icone = $('.botao-menu-mobile i');
			icone.removeClass('fa-bars');
			icone.addClass('fa-times-circle');
			listaMenu.slideToggle();
		}else{
			var icone = $('.botao-menu-mobile i');
			icone.removeClass('fa-times-circle');
			icone.addClass('fa-bars');
			listaMenu.slideToggle();
		}
	})

})