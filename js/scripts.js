$(function(){
	//Aqui vai todo código de javascript.
	$('nav.mobile').click(function(){
		//O que vai acontecer quando clicarmos na nav mobile!
		var listaMenu = $('nav.mobile ul');
		listaMenu.slideToggle();//Abrir menu sem if e com outro efeito
			
			//Abrir menu através do fedein
			/*
			if(listaMenu.is(':hidden')== true){
				listaMenu.fadeIn();
			}
			else{
				listaMenu.fadeOut();
			}
			*/
	})

})