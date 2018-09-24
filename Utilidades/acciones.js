/**Script de acciones*/
$( document ).ready(function() {
   //Acciones del menu principal
   var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);

	$('#contenedorPrincipal1').load(function () {
		$(this).contents().find("p").css({'background-color':'red','font-weight':'bolder','color':'white'});
	});
});

/*var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}*/


function navegacionMenu(tema){
	console.log('el tema es:...'+tema);
	if( $('#'+tema).is(":visible") ){
   		$('#'+tema).removeClass('collapseIn');
		$('#'+tema).addClass('collapseOn');
	}else{
	    $('#'+tema).removeClass('collapseOn');
		$('#'+tema).addClass('collapseIn');
	}
}

function navegacionPagina(tema, subtema){
	//var ruta = tema+"/"+tema+".html"+"#"+subtema;
	var ruta = tema+"/"+subtema+".html";
	if(tema =="index"){
		ruta = "portada.html"
	}
	
	console.log("La ruta que va cargar es:....."+ruta);
	$('#contenedorPrincipal').load(ruta);
	window.frames["ventana_iframe"].location = ruta; 
}