var hoverarea1 = $(".hover-1");
var stand1 = ["#Br-1-1", "#BR-1-2", "#BR-1-3", "#Number-1", "#un", "#text1"];
var TheStands= ["#Stand-1","#Stand-2","#Stand-3","#Stand-4",]
var time = 500;
$(hoverarea1 || stand1).hover(function(){
	$(TheStands[1]).css("opacity","0.5");
	$(TheStands[2]).css("opacity","0.5");
	$(TheStands[3]).css("opacity","0.5");
	$("#Stand-1").addClass("active");
	$(stand1[0]).attr({
		d:"M897.1 490.5H1539v323.2H897.1z"
	},time)
	$(stand1[1]).attr({
		d:"M1229.8 247H1539v265h-309.2z"
	},time)
	$(stand1[2]).attr({
		d:"M897.1 247h340.6v265H897.1z"
	},time)
	$(stand1[3]).attr({
		r:"0"
	},time)
	$(stand1[4]).attr({
		opacity:"0"
	},time)
	$(hoverarea1).attr({
		d:"M897.1 247H1539v566.7H897.1z"
	})
	document.getElementById("text1").style.transitionDelay = "0.2s";
	$(stand1[5]).attr({
		opacity:"1",
	})
});

$(hoverarea1 || stand1).mouseout(function(){
	$(TheStands[1]).css("opacity","1");
	$(TheStands[2]).css("opacity","1");
	$(TheStands[3]).css("opacity","1");
	document.getElementById("text1").style.transitionDelay = "0s";
	
	$("#Stand-1").removeClass("active");
	
	$(stand1[0]).attr({
		d:"M1011.4 566.8H1448v246.9h-436.6z"
	},time)
	$(stand1[1]).attr({
		d:"M1245.1 247h200.3v247.5h-200.3z"
	},time)
	$(stand1[2]).attr({
		d:"M1014.1 247h200.3v247.5h-200.3z"
	},time)
	$(stand1[3]).attr({
		r:"62.3"
	},time)
	$(stand1[4]).attr({
		opacity:"1"
	},time)
	$(stand1[5]).attr({
		opacity:"0"
	},time)
	$(hoverarea1).attr({
		d:"M1011.4 247H1448v566.7h-436.6z"
	})
});

//stand 2
var hoverarea2 = $(".hover-2");
var stand2 = ["#long-b", "#small-b", "#text2", "#Number-2", "#deux",];
$(hoverarea2 || stand2).hover(function(){
	$(TheStands[0]).css("opacity","0.5");
	$(TheStands[2]).css("opacity","0.5");
	$(TheStands[3]).css("opacity","0.5");
	$("#Stand-2").addClass("active");
	
	$(stand2[0]).attr({
		d:"M356.9 799.3h618.5v193.2H356.9z"
	},time)
	$(stand2[1]).attr({
		d:"M356.9 566.8h618.5v245.6H356.9z"
	},time)
	$(stand2[2]).attr({
		opacity:"1"
	},time)
	$(stand2[3]).attr({
		r:"0"
	},time)
	$(stand2[4]).attr({
		opacity:"0"
	},time)
	$(hoverarea2).attr({
		d:"M356.9,992.5V566.8h618.5v331l313.9,2.2v92.7L356.9,992.5z"
	})
	document.getElementById("text2").style.transitionDelay = "0.2s";
	$(stand2[5]).attr({
		opacity:"1",
	})
});

$(hoverarea2 || stand2).mouseout(function(){
	$(TheStands[0]).css("opacity","1");
	$(TheStands[2]).css("opacity","1");
	$(TheStands[3]).css("opacity","1");
	document.getElementById("text2").style.transitionDelay = "0s";
	$("#Stand-2").removeClass("active");
	$(stand2[0]).attr({
		d:"M399 900h890.3v92.7H399z"
	},time)
	$(stand2[1]).attr({
		d:"M399 720h431.5v92.5H399z"
	},time)
	$(stand2[2]).attr({
		opacity:"0"
	},time)
	$(stand2[3]).attr({
		r:"62.3"
	},time)
	$(stand2[4]).attr({
		opacity:"1"
	},time)
	$(stand2[5]).attr({
		opacity:"0"
	},time)
	$(hoverarea2).attr({
		d:"M399 720v272.7h890.3V900l-459-5.9.2-174.1z"
	})
});

var hoverarea3 = $(".hover-3");
var stand3 = ["#Br-3-2", "#Br-3-1", "#Flat-down", "#Flat-up", "#LR","#text3","#Number-3","#trois",];
$(hoverarea3 || stand3).hover(function(){
	$(TheStands[1]).css("opacity","0.5");
	$(TheStands[0]).css("opacity","0.5");
	$(TheStands[3]).css("opacity","0.5");
	$("#Stand-3").addClass("active");
	
	$(stand3[0]).attr({
		d:"M608.5 186h355.9v316.8H608.5z"
	},time)
	$(stand3[1]).attr({
		d:"M363 186h251.7v316.8H363z"
	},time)
	$(stand3[2]).attr({
		d:"M363 497.5h601.3v161.8H363z"
	},time)
	$(stand3[3]).attr({
		d:"M363 95.4h601.3v97.8H363z"
	},time)
	$(stand3[4]).attr({
		d:"M228 95.4h139.5v563.9H228z"
	},time)
	$(stand3[5]).attr({
		opacity:"1"
	},time)
	$(stand3[6]).attr({
		r:"0"
	},time)
	$(stand3[7]).attr({
		opacity:"0"
	},time)
	$(hoverarea3).attr({
		d:"M228 894.1h92V659.3h644.3V95.4H228z"
	})
	document.getElementById("text3").style.transitionDelay = "0.2s";
});

$(hoverarea3 || stand3).mouseout(function(){
	$(TheStands[1]).css("opacity","1");
	$(TheStands[0]).css("opacity","1");
	$(TheStands[3]).css("opacity","1");
	document.getElementById("text3").style.transitionDelay = "0s";
	$("#Stand-3").removeClass("active");
	$(stand3[0]).attr({
		d:"M630 247h200.3v247.5H630z"
	},time)
	$(stand3[1]).attr({
		d:"M399 247h200.3v247.5H399z"
	},time)
	$(stand3[2]).attr({
		d:"M392.9 568h437.6v91.3H392.9z"
	},time)
	$(stand3[3]).attr({
		d:"M358.6 95.4h538.5v91.3H358.6z"
	},time)
	$(stand3[4]).attr({
		d:"M228 202.3h92v691.8h-92z"
	},time)
	$(stand3[5]).attr({
		opacity:"0"
	},time)
	$(stand3[6]).attr({
		r:"62.3"
	},time)
	$(stand3[7]).attr({
		opacity:"1"
	},time)
	$(hoverarea3).attr({
		d:"M228 894h92V659.3h510.5l-.2-472.6h66.8V95.4H358.6v106.9H228z"
	})
});

var hoverarea4 = $(".hover-4");
var stand4 = ["#Horizontal","#Vertical","#text4","#Number-4","#four",];
$(hoverarea4 || stand4).hover(function(){
	$(TheStands[1]).css("opacity","0.5");
	$(TheStands[2]).css("opacity","0.5");
	$(TheStands[0]).css("opacity","0.5");
	$("#Stand-4").addClass("active");
	
	$(stand4[0]).attr({
		d:"M897.1 95.4h804.5V596H897.1z"
	},time)
	$(stand4[1]).attr({
		d:"M1609.3 201.8h92.3V596h-92.3z"
	},time)
	$(stand4[2]).attr({
		opacity:"1"
	},time)
	$(stand4[3]).attr({
		r:"0"
	},time)
	$(stand4[4]).attr({
		opacity:"0"
	},time)

	$(hoverarea4).attr({
		d:"M1609.3 963.3h92.3V95.4H897.1V596h712.2z"
	})
	document.getElementById("text4").style.transitionDelay = "0.2s";
});

$(hoverarea4 || stand4).mouseout(function(){
	$(TheStands[1]).css("opacity","1");
	$(TheStands[2]).css("opacity","1");
	$(TheStands[0]).css("opacity","1");
	document.getElementById("text4").style.transitionDelay = "0s";
	$("#Stand-4").removeClass("active");
	$(stand4[0]).attr({
		d:"M964.3 95.4h737.3v91.3H964.3z"
	},time)
	$(stand4[1]).attr({
		d:"M1609.3 201.8h92.3v761.6h-92.3z"
	},time)
	$(stand4[2]).attr({
		opacity:"0"
	},time)
	$(stand4[3]).attr({
		r:"62.3"
	},time)
	$(stand4[4]).attr({
		opacity:"1"
	},time)
	$(hoverarea4).attr({
		d:"M964.3 95.4v91.3H1539v68.8h70.3v707.8h92.4V95.4z"
	})
});

