var h2_pantallaInfo = [
"Producte químic",
"Solució patró",
"Pes",
"Resistència",
"Lent"
];

var p_pantallaInfo = [
"Substància de la qual es coneixen la composició i altres valors, com la puresa, la densitat, la concentració, etc.",
"Solució preparada de la qual es coneixen amb exactitud valors com la concentració, l’acidesa, etc. Es fa servir com a referència per determinar les característiques d’altres solucions.",
"Peça metàl·lica la massa de la qual és constant i coneguda, i que, per comparació, serveix per determinar la massa d’altres cossos en una balança de braços. També s’usa per calibrar les balances digitals",
"Element que s’intercala en un circuit i modifica el pas del corrent elèctric segons un valor indicat.",
"Cristall transparent, amb forma i potència (en diòptries) conegudes, que serveix per desviar raigs de llum."
];

var imgs_pantallaInfo = [
"./imagen/1.Producto Quimico.svg",
"./imagen/2.Solución patrón.svg",
"./imagen/3.Balanza.svg",
"./imagen/4_Resistencia.svg",
"./imagen/5_Lente.svg"
];

var id_cuadro;

$(document).ready(function(){

  
    $( ".button" ).click(function() {
        hideInfo();
        id_cuadro = this.id.substr(this.id.length - 1)-1;
        $( "#titPantallaInfo" ).text(h2_pantallaInfo[id_cuadro]);
        $( "#textPantallaInfo" ).text(p_pantallaInfo[id_cuadro]);
        $( "#imgPantallaInfo" ).attr("src", imgs_pantallaInfo[id_cuadro]);
        showInfo();
    });

    $( ".close" ).click(function() {
        hideInfo();
    });
});


function showInfo(){
    // $( ".fondoInfo" ).show( "fast" );
    // $( ".pantallaInfoUno" ).show( "fast" );
    $( ".fondoInfo" ).css( "display" , "flex" );
    $( ".pantallaInfoUno" ).css( "display" , "flex" );
    console.log ($( ".textosInfo" ));
    $( ".textosInfo" ).children().effect('slide', { direction: 'up', mode: 'show' }, 200);
    $( "#imgPantallaInfo" ).effect('slide', { direction: 'left', mode: 'show' }, 200);
}

function hideInfo(){
    $( ".fondoInfo" ).css( "display" , "none" );
    $( ".pantallaInfoUno" ).css( "display" , "none" );
    $( ".textosInfo" ).children().css( "display" , "none" );
    $( "#imgPantallaInfo" ).css( "display" , "none" );
}