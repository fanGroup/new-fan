/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // introducir aquí código que se debe ejecutar cuando la composición está totalmente cargada
         
         var stageHeight = sym.$("Stage").height();
         
         sym.$("Stage").css({
         	"transform-origin":"0 0",
         	"-webkit-transform-origin":"0 0",
         	"-ms-transform-origin":"0 0",
         	"-moz-transform-origin":"0 0",
         });
         
         function scaleStage() {
         	var stage = sym.$("Stage");
         	var parent = sym.$("Stage").parent();
         	var parentWidth = stage.parent().width();
         	var stageWidth = stage.width();
         	var desiredWidth = Math.round(parentwidth * 1);
         	var rescale = (desiredWidth / stageWidth);
         
         	stage.css('transform','scale(' + rescale + ')');
         	stage.css('-webkit-transform','scale(' + rescale + ')');
         	stage.css('-ms-transform','scale(' + rescale + ')');
         	stage.css('-moz-transform','scale(' + rescale + ')');
         	parent.height(stageHeight * rescale);
         }
         
         $(window).on('resize', function() {
         	scaleStage();
         });
         
         $(document).ready(function(){
         	scaleStage();
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-595407986");