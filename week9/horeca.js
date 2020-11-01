var vraag
let frisdrank = 0
let bier = 0
let wijn = 0
let biterbal8 = 0	
let biterbal16 = 0



function vraag2(){
	vraag=prompt("wat wil je bestellen wijn kost $5,50, bier kost $4,50 of frisdrank kost $2,50. type snacks om bitterballen te bestellen als u klaar bent zeg dan stop.")
		if (vraag == "wijn"){
			var aantalwijn = prompt("Hoeveel pojioter wijn wilt u bestellen?")
			wijn = aantalwijn * 5,50
			document.write(aantalwijn +" "+ "wijn-" + wijn + "euro" + "<br/>")
			vraag2();



		}
		else if (vraag == "bier"){
			var aantalbier = prompt("hoeveel hertog-jan bier wilt u bestellen?")
			bier = aantalbier * 4,50
			document.write(aantalbier +" "+ "bier-" + bier + "euro" + "<br/>")
			vraag2();



		}
		else if (vraag == "frisdrank" ){
			var aantalfrisdrank = prompt("hoveel fris wilt u bestellen?")
			frisdrank = aantalfrisdrank * 2,50
			document.write(aantalfrisdrank +" "+ "fris-" + frisdrank + "euro" + "<br/>")
			vraag2();



		}
		
		else if (vraag == "snacks"){
			var aantalbb = prompt("hoeveel bitterballen wil je 8 of 16")
				
			if (aantalbb == "8"){
				biterbal8 = aantalbiterbal * 0.50
				document.write(aantalbiterbal +" "+ "bitterballen-" + biterbal8 + "euro" + "<br/>")
					vraag2();

			}
			else if (aantalbiterbal == "16"){
				 
			 	biterbal16 = aantalbiterbal * 0.50
				document.write(aantalbiterbal +" "+ "bitterballen-" + biterbal16 + "euro" + "<br/>")
				vraag2();

			}
			else{
				alert("dit is niet een hoeveelheid waar in wij bitterballen verkopen")
				vraag2();
			}
		}
		else if (vraag == "stop"){
					var totaal = wijn + bier + frisdrank + biterbal8 + biterbal16
					document.write("totaal =" +" "+ totaal + "euro")
				}


		
		else{
			alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.")
			vraag2();
		}
	}		


vraag2();