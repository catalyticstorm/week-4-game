// JavaScript Document

var rubyValue = 1;
var sapphireValue = 2;
var emeraldValue = 4;
var diamondValue = 8;

var winCount = 0;
var lssCount = 0;

var gemValue = 0;
var gemCounter = 0;
var comChoice = Math.floor((Math.random() * 199) + 1); //Needs to have a plus one cause you can't guess 0 in this game

function startup() {
	comChoice = Math.floor((Math.random() * 199) + 1);
	$("#computersNumber").html("The Computer's Number: " + comChoice);
	setTimeout(function() { $("#computersNumber").empty(); }, 1000);
	$("#gameNews1").html("Game Started.");
	gemValue = 0;
	$("#gameNews2").html(gemValue);
	$("#gemCounter").html(gemCounter);
	$("#wins").html(winCount);
	$("#loss").html(lssCount);
	buttons();
}

function buttons() {
	$("#ruby").on("click", function() {
		gemCounter += rubyValue;
		gemValue = 0;
		gemValue = rubyValue;
		$("#gemCounter").html(gemCounter);
		$("#gameNews2").html(gemValue);
		see();
	});
	$("#sapphire").on("click", function() {
		gemCounter += sapphireValue;
		gemValue = 0;
		gemValue = sapphireValue;
		$("#gemCounter").html(gemCounter);
		$("#gameNews2").html(gemValue);
		see();
	});
	$("#emerald").on("click", function() {
		gemCounter += emeraldValue;
		gemValue = 0;
		gemValue = emeraldValue;
		$("#gemCounter").html(gemCounter);
		$("#gameNews2").html(gemValue);
		see();
	});
	$("#diamond").on("click", function() {
		gemCounter += diamondValue;
		gemValue = 0;
		gemValue += diamondValue;
		$("#gemCounter").html(gemCounter);
		$("#gameNews2").html(gemValue);
		see();
	});
}

function see() {
	if (gemCounter === comChoice) {
		var gemMultiplier = Math.floor((Math.random() * 8) + 1); //Plus One makes sure it won't ever multiply by 0 so the game is still winnable
		$("#computersNumber").html(comChoice);
		$("#gameNews1").html("You Won");
		winCount += 1;
		$("#wins").html(winCount);
		alert("Congratulations, you won. Game Will Reset.");
		gemCounter = 0;
		gemValue = 0;
		comChoice = Math.floor((Math.random() * 199) + 1);
		$("#computersNumber").html("The Computer's Number: " + comChoice);
		setTimeout(function() { $("#computersNumber").empty(); }, 1000);
		rubyValue *= gemMultiplier;
		sapphireValue *= gemMultiplier;
		emeraldValue *= gemMultiplier;
		diamondValue *= gemMultiplier;
	}
	else if (gemCounter > comChoice) {
		alert("You lost");
		lssCount += 1;
		$("#loss").html(lssCount);
		alert("Game Will Reset. You went over", comChoice + ".");
		gemCounter = 0;
		gemValue = 0;
		comChoice = Math.floor((Math.random() * 199) + 1);
		$("#computersNumber").html("The Computer's Number: " + comChoice);
		setTimeout(function() { $("#computersNumber").empty(); }, 1000);
		rubyValue = 1;
		sapphireValue = 2;
		emeraldValue = 4;
		diamondValue = 8;
	}
}

$("#buttonContainer").on("click", function() {
	startup();
});