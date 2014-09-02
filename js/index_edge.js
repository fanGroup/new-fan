/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'portada1080',
            type:'image',
            rect:['0%','0%','100%','100%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"portada1080.jpg",'0px','0px']
         },
         {
            id:'monitores',
            type:'image',
            rect:['22.1%','39.1%','19.2%','31.9%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"monitores.png",'0px','0px']
         },
         {
            id:'monitorAbajo',
            type:'rect',
            rect:['31.3%','16.2%','3.9%','5.4%','auto','auto'],
            fill:["rgba(160,214,94,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'monitorDerecha',
            type:'rect',
            rect:['35.2%','5.4%','3.9%','5.4%','auto','auto'],
            fill:["rgba(109,166,69,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'monitorArriba',
            type:'rect',
            rect:['31.3%','5.4%','3.9%','5.4%','auto','auto'],
            fill:["rgba(140,191,93,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'monitorIzquierda',
            type:'rect',
            rect:['27.4%','5.4%','3.9%','5.4%','auto','auto'],
            fill:["rgba(115,177,71,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'f',
            type:'image',
            rect:['44.4%','39.1%','8%','22.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"f.png",'0px','0px']
         },
         {
            id:'a',
            type:'image',
            rect:['48.4%','39.1%','12.2%','22.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"a.png",'0px','0px']
         },
         {
            id:'n',
            type:'image',
            rect:['63.9%','39.1%','8.7%','22.4%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"n.png",'0px','0px']
         },
         {
            id:'labs',
            type:'image',
            rect:['43.5%','62.1%','34.3%','10.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"labs.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_monitorArriba}": [
            ["color", "background-color", 'rgba(140,191,93,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '31.3%'],
            ["style", "top", '5.37%']
         ],
         "${_monitorIzquierda}": [
            ["color", "background-color", 'rgba(115,177,71,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '27.4%'],
            ["style", "top", '5.37%']
         ],
         "${_labs}": [
            ["style", "top", '62.13%'],
            ["style", "opacity", '0'],
            ["style", "left", '43.54%']
         ],
         "${_n}": [
            ["style", "top", '39.07%'],
            ["style", "opacity", '0'],
            ["style", "left", '63.92%']
         ],
         "${_a}": [
            ["style", "top", '39.07%'],
            ["style", "opacity", '0'],
            ["style", "left", '48.39%']
         ],
         "${_monitores}": [
            ["style", "top", '39.07%'],
            ["style", "opacity", '0'],
            ["style", "left", '22.08%']
         ],
         "${_f}": [
            ["style", "top", '39.07%'],
            ["style", "opacity", '0'],
            ["style", "left", '44.38%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '100%'],
            ["style", "height", '100%'],
            ["style", "overflow", 'hidden']
         ],
         "${_monitorDerecha}": [
            ["color", "background-color", 'rgba(109,166,69,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '35.21%'],
            ["style", "top", '5.37%']
         ],
         "${_portada1080}": [
            ["style", "left", '0%'],
            ["style", "top", '0%']
         ],
         "${_monitorAbajo}": [
            ["color", "background-color", 'rgba(160,214,94,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '31.3%'],
            ["style", "top", '16.2%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3805,
         autoPlay: true,
         timeline: [
            { id: "eid4", tween: [ "style", "${_monitorIzquierda}", "top", '52.41%', { fromValue: '5.37%'}], position: 500, duration: 2000, easing: "easeInOutElastic" },
            { id: "eid61", tween: [ "color", "${_monitorArriba}", "background-color", 'rgba(140,191,93,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(140,191,93,1.00)'}], position: 340, duration: 0 },
            { id: "eid73", tween: [ "color", "${_monitorArriba}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(140,191,93,1)'}], position: 1355, duration: 1145 },
            { id: "eid95", tween: [ "style", "${_n}", "opacity", '1', { fromValue: '0.000000'}], position: 2145, duration: 965, easing: "easeInSine" },
            { id: "eid65", tween: [ "style", "${_monitorArriba}", "border-bottom-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 340, duration: 0 },
            { id: "eid74", tween: [ "style", "${_monitorArriba}", "border-bottom-left-radius", [8,8], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1355, duration: 1145 },
            { id: "eid42", tween: [ "style", "${_monitorDerecha}", "border-bottom-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 155, duration: 0, easing: "easeInOutElastic" },
            { id: "eid58", tween: [ "style", "${_monitorDerecha}", "border-bottom-right-radius", [8,8], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1257, duration: 1243 },
            { id: "eid11", tween: [ "style", "${_monitorIzquierda}", "border-bottom-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 0, easing: "easeInOutElastic" },
            { id: "eid20", tween: [ "style", "${_monitorIzquierda}", "border-bottom-right-radius", [8,8], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1440, duration: 1060 },
            { id: "eid10", tween: [ "style", "${_monitorIzquierda}", "border-top-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 0, easing: "easeInOutElastic" },
            { id: "eid19", tween: [ "style", "${_monitorIzquierda}", "border-top-right-radius", [8,8], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1440, duration: 1060 },
            { id: "eid63", tween: [ "style", "${_monitorArriba}", "border-top-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 340, duration: 0 },
            { id: "eid76", tween: [ "style", "${_monitorArriba}", "border-top-right-radius", [8,8], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1355, duration: 1145 },
            { id: "eid53", tween: [ "style", "${_monitorDerecha}", "left", '37.29%', { fromValue: '35.21%'}], position: 155, duration: 2345, easing: "easeInOutElastic" },
            { id: "eid24", tween: [ "style", "${_monitorAbajo}", "border-bottom-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_monitorAbajo}", "border-bottom-right-radius", [8,8], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1175, duration: 1325 },
            { id: "eid41", tween: [ "style", "${_monitorDerecha}", "border-top-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 155, duration: 0, easing: "easeInOutElastic" },
            { id: "eid57", tween: [ "style", "${_monitorDerecha}", "border-top-right-radius", [8,8], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1257, duration: 1243 },
            { id: "eid44", tween: [ "color", "${_monitorDerecha}", "background-color", 'rgba(109,166,69,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(109,166,69,1.00)'}], position: 155, duration: 0, easing: "easeInOutElastic" },
            { id: "eid54", tween: [ "color", "${_monitorDerecha}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(109,166,69,1)'}], position: 1257, duration: 1243 },
            { id: "eid22", tween: [ "style", "${_monitorAbajo}", "border-top-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_monitorAbajo}", "border-top-left-radius", [8,8], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1175, duration: 1325 },
            { id: "eid5", tween: [ "style", "${_monitorIzquierda}", "left", '27.34%', { fromValue: '27.4%'}], position: 500, duration: 2000, easing: "easeInOutElastic" },
            { id: "eid98", tween: [ "style", "${_labs}", "opacity", '1', { fromValue: '0.000000'}], position: 2405, duration: 1250, easing: "easeInSine" },
            { id: "eid52", tween: [ "style", "${_monitorDerecha}", "top", '52.41%', { fromValue: '5.37%'}], position: 155, duration: 2345, easing: "easeInOutElastic" },
            { id: "eid9", tween: [ "style", "${_monitorIzquierda}", "border-top-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 0, easing: "easeInOutElastic" },
            { id: "eid18", tween: [ "style", "${_monitorIzquierda}", "border-top-left-radius", [8,8], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1440, duration: 1060 },
            { id: "eid71", tween: [ "style", "${_monitorArriba}", "top", '59.63%', { fromValue: '5.37%'}], position: 340, duration: 2160, easing: "easeInOutElastic" },
            { id: "eid34", tween: [ "style", "${_monitorAbajo}", "left", '32.34%', { fromValue: '31.3%'}], position: 0, duration: 2500, easing: "easeInOutElastic" },
            { id: "eid82", tween: [ "style", "${_monitores}", "opacity", '1', { fromValue: '0'}], position: 2860, duration: 945, easing: "easeInSine" },
            { id: "eid23", tween: [ "style", "${_monitorAbajo}", "border-top-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid38", tween: [ "style", "${_monitorAbajo}", "border-top-right-radius", [8,8], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1175, duration: 1325 },
            { id: "eid91", tween: [ "style", "${_a}", "opacity", '1', { fromValue: '0.000000'}], position: 1925, duration: 935, easing: "easeInSine" },
            { id: "eid33", tween: [ "style", "${_monitorAbajo}", "top", '45.83%', { fromValue: '16.2%'}], position: 0, duration: 2500, easing: "easeInOutElastic" },
            { id: "eid12", tween: [ "style", "${_monitorIzquierda}", "border-bottom-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 0, easing: "easeInOutElastic" },
            { id: "eid17", tween: [ "style", "${_monitorIzquierda}", "border-bottom-left-radius", [8,8], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1440, duration: 1060 },
            { id: "eid87", tween: [ "style", "${_f}", "opacity", '1', { fromValue: '0.000000'}], position: 1750, duration: 955, easing: "easeInSine" },
            { id: "eid21", tween: [ "color", "${_monitorAbajo}", "background-color", 'rgba(160,214,94,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(160,214,94,1.00)'}], position: 0, duration: 0 },
            { id: "eid35", tween: [ "color", "${_monitorAbajo}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(160,214,94,1)'}], position: 1175, duration: 1325 },
            { id: "eid25", tween: [ "style", "${_monitorAbajo}", "border-bottom-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid36", tween: [ "style", "${_monitorAbajo}", "border-bottom-left-radius", [8,8], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1175, duration: 1325 },
            { id: "eid43", tween: [ "style", "${_monitorDerecha}", "border-bottom-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 155, duration: 0, easing: "easeInOutElastic" },
            { id: "eid55", tween: [ "style", "${_monitorDerecha}", "border-bottom-left-radius", [8,8], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1257, duration: 1243 },
            { id: "eid62", tween: [ "style", "${_monitorArriba}", "border-top-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 340, duration: 0 },
            { id: "eid75", tween: [ "style", "${_monitorArriba}", "border-top-left-radius", [8,8], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1355, duration: 1145 },
            { id: "eid64", tween: [ "style", "${_monitorArriba}", "border-bottom-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 340, duration: 0 },
            { id: "eid77", tween: [ "style", "${_monitorArriba}", "border-bottom-right-radius", [8,8], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1355, duration: 1145 },
            { id: "eid1", tween: [ "color", "${_monitorIzquierda}", "background-color", 'rgba(115,177,71,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(115,177,71,1.00)'}], position: 500, duration: 0 },
            { id: "eid8", tween: [ "color", "${_monitorIzquierda}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(115,177,71,1)'}], position: 1440, duration: 1060 },
            { id: "eid72", tween: [ "style", "${_monitorArriba}", "left", '32.34%', { fromValue: '31.3%'}], position: 340, duration: 2160, easing: "easeInOutElastic" },
            { id: "eid40", tween: [ "style", "${_monitorDerecha}", "border-top-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 155, duration: 0, easing: "easeInOutElastic" },
            { id: "eid56", tween: [ "style", "${_monitorDerecha}", "border-top-left-radius", [8,8], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1257, duration: 1243 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-595407986");
