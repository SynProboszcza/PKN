function nadpisz(text,id){
	zawartosc=text;
	id=id;
	document.getElementById(id).innerHTML=zawartosc;}
function dopisz(text,id){
	zawartosc=text;
	id=id;
	document.getElementById(id).innerHTML+=zawartosc;}
function nazwa_dnia_tygodnia(a){
	switch(a){
		case 0:
		return 'niedziela';
		break;
		case 1:
		return 'poniedziałek';
		break;
		case 2:
		return 'wtorek';
		break;
		case 3:
		return 'środa';
		break;
		case 4:
		return 'czwartek';
		break;
		case 5:
		return 'piątek';
		break;
		case 6:
		return 'sobota';
		break;
	}}
function nazwa_miesiaca(a){
	switch(a){
		case 0:
		return 'stycznia';
		break;
		case 1:
		return 'lutego';
		break;
		case 2:
		return 'marca';
		break;
		case 3:
		return 'kwietnia';
		break;
		case 4:
		return 'maja';
		break;
		case 5:
		return 'czerwca';
		break;
		case 6:
		return 'lipca';
		break;
		case 7:
		return 'sierpnia';
		break;
		case 8:
		return 'września';
		break;
		case 9:
		return 'października';
		break;
		case 10:
		return 'listopada';
		break;
		case 11:
		return 'grudnia';
		break;
	}}
String.prototype.pierwszaDuza = function(){

	return this.charAt(0).toUpperCase()+this.substring(1).toLowerCase();}
function losuj(min,max){
	
	return Math.floor(Math.random()*(max-min+1)+min);}
function pauza(milisekundy){
	//znalazłem to w necie https://www.sean.co.uk/a/webdesign/javascriptdelay.shtm
	var date = new Date();
	var curDate = null;
	do { curDate = new Date(); }
	while(curDate-date < millis);}


//zwraca Kamień/Nożyce/Papier po 0/1/2
function nazwaPKN(liczba){
	if(liczba==0){return "Kamień";}
	else if(liczba==1){return "Nożyce";}
	else if(liczba==2){return "Papier";}
	else return "błąd katastrofalny, nie ten przedział panie";}

//zamienia różne wersje wejścia na 0/1/2/'nie wiem co wpisałeś'
function czytanieOdUsera(text){
	if		(text==''){return 0}
	else if	(text=='Kamien' || text=='kamien' || text=='Kamień' || text=='kamień' || text=='K' || text=='k' || text==0)	{return 0;}
	else if	(text=='Nożyce' || text=='nożyce' || text=='Nozyce' || text=='nozyce' || text=='N' || text=='n' || text==1)	{return 1;}
	else if	(text=='Papier' || text=='papier' || text=='P'      || text=='p'      || text==2)							{return 2;}
	else return 'nie wiem co wpisałeś';}

//główna logika gry, sprawdzanie kto wygrał poprzez 0/1/2
function ktoWygral(gracz1,gracz2,Ngracz1='gracz1',Ngracz2='Komputer'){
	//gracz1 i gracz2 to liczby, Ngracze to nazwy, ale to do wprowadzenia

	//sprawdzanie czy to na pewno 0/1/2
	if(gracz1!=0 && gracz1!=1 && gracz1!=2){return 'We nawet nie próbuj.'}
	if(gracz2!=0 && gracz2!=1 && gracz2!=2){return 'We nawet nie próbuj.'}

	//najpierw gracz1 kamien
	if(gracz1==0){
		if(gracz1==0 && gracz2==0){					return 'Remis!';}
		if(gracz1==0 && gracz2==1){zwyciestwa1++;	return 'Wygrał '+Ngracz1;}//kamień tępi nożyce
		if(gracz1==0 && gracz2==2){zwyciestwa2++;	return 'Wygrał '+Ngracz2;}//kamień jest owijany przez papier
	}
	//teraz gracz1 nożyce
	if(gracz1==1){
		if(gracz1==1 && gracz2==0){zwyciestwa2++;	return 'Wygrał '+Ngracz2;}//nożyce są tępione przez kamień
		if(gracz1==1 && gracz2==1){					return 'Remis!';}
		if(gracz1==1 && gracz2==2){zwyciestwa1++;	return 'Wygrał '+Ngracz1;}//nożyce tną papier
	}
	//teraz gracz1 papier
	if(gracz1==2){
		if(gracz1==2 && gracz2==0){zwyciestwa1++;	return 'Wygrał '+Ngracz1;}//papier owija kamień
		if(gracz1==2 && gracz2==1){zwyciestwa2++;	return 'Wygrał '+Ngracz2;}//papier jest cięty przez nożyce
		if(gracz1==2 && gracz2==2){					return 'Remis!';}
	}}


function Gra(a){
	//tym sprawdzam czy imie nie jest już ustawione
	if(typeof(imie)==='undefined'){
		if(a=='debug'){imie='DEBUG'}
		else imie=prompt('Jak sie nazywasz?');}

	//tym sprawiam żeby w konsoli podpowiedź włączyła się tylko raz
	if(typeof(beczka)==='undefined'){
		beczka='konstyntantynopolitańczykowianeczka';
		console.log('0 - kamień, 1 - nożyce, 2 - papier');}

	//tworzymy tablice do pamietania wyborów, jeżeli nie istnieje
	//potrzebna jest w tym momencie, a jak stworzymy nową podczas
	//istnienia starej to pewnie nadpisze dane
		if(typeof(historiaWyborow)=='undefined'){
		historiaWyborow = [];}

	//pytamy co chce gracz
	wyborGracza = prompt('Co wybierasz? Domyślnie jest kamień');

	//pseudo AI, jezeli trzy ostatnie elementy tablicy są takie same, komputer bedzie wybierać taki, aby go kontrować
		if     (historiaWyborow[historiaWyborow.length-1]==0 && historiaWyborow[historiaWyborow.length-2]==0 && historiaWyborow[historiaWyborow.length-3]==0){glosKomputera = 2;}
		else if(historiaWyborow[historiaWyborow.length-1]==1 && historiaWyborow[historiaWyborow.length-2]==1 && historiaWyborow[historiaWyborow.length-3]==1){glosKomputera = 0;}
		else if(historiaWyborow[historiaWyborow.length-1]==2 && historiaWyborow[historiaWyborow.length-2]==2 && historiaWyborow[historiaWyborow.length-3]==2){glosKomputera = 1;}
		else   {glosKomputera = losuj(0,2);}

	//nadpisz, żeby działało kilka razy bez odświeżania
	nadpisz('Komputer: '+nazwaPKN(glosKomputera)+'<br>'+imie+': '+nazwaPKN(czytanieOdUsera(wyborGracza))+'<br>','wynik');

	//jeszcze nie dopisuje imienia komputera, domyślnie jest 'Komputer'
	dopisz(ktoWygral(czytanieOdUsera(wyborGracza),glosKomputera,imie),'wynik');

	//dodajemy do tablicy ostatni wybór gracza
	historiaWyborow.push(czytanieOdUsera(wyborGracza));
	if(a=='debug'){nadpisz(historiaWyborow,'debug');}}

//wywoływane przez przycisk
function GraV2(wybor,a){
	wyborGracza = wybor;

	//tworzymy tablice do pamietania wyborów, jeżeli nie istnieje
	//potrzebna jest w tym momencie, a jak stworzymy nową podczas
	//istnienia starej to pewnie nadpisze dane
		if(typeof(historiaWyborow)=='undefined'){
		historiaWyborow = [];}

	//pseudo AI, jezeli trzy ostatnie elementy tablicy są takie same, komputer bedzie wybierać taki, aby go kontrować
		if     (historiaWyborow[historiaWyborow.length-1]==0 && historiaWyborow[historiaWyborow.length-2]==0 && historiaWyborow[historiaWyborow.length-3]==0){glosKomputera = 2;}
		else if(historiaWyborow[historiaWyborow.length-1]==1 && historiaWyborow[historiaWyborow.length-2]==1 && historiaWyborow[historiaWyborow.length-3]==1){glosKomputera = 0;}
		else if(historiaWyborow[historiaWyborow.length-1]==2 && historiaWyborow[historiaWyborow.length-2]==2 && historiaWyborow[historiaWyborow.length-3]==2){glosKomputera = 1;}
		else   {glosKomputera = losuj(0,2);}

	//nadpisz, żeby działało kilka razy bez odświeżania
	nadpisz(imie+': '+nazwaPKN(czytanieOdUsera(wyborGracza))+'<br>Komputer: '+nazwaPKN(glosKomputera)+'<br>','wynik');

	//jeszcze nie dopisuje imienia komputera, domyślnie jest 'Komputer'
	dopisz(ktoWygral(czytanieOdUsera(wyborGracza),glosKomputera,imie),'wynik');

	//historia zwycięstw
	nadpisz(imie+' '+zwyciestwa1+' : '+zwyciestwa2,'wygrane');

	//dodajemy do tablicy ostatni wybór gracza
	historiaWyborow.push(czytanieOdUsera(wyborGracza));
	if(a=='debug'){nadpisz(historiaWyborow,'debug');}
	}

//luźny kod, bo potrzebne jest imie
//używam JQUERY, bo ładnie wygląda że komunikat
//sie uruchomi dopiero jak sie załadują przyciski

$(document).ready(function(){
	imie=prompt('Jak sie nazywasz?');
	if(imie==''){imie='Anonim'}
	if(imie==null){imie='Anonim'}
	imie=imie.pierwszaDuza();
	if(imie=='Jd'){imie='nie wolno przeklinać'}
	////document.getElementById('text').value
	////ustawiam żeby w textarea było aktualne imie
	////$('#text').text(imie);
});

//tym sprawiam żeby w konsoli podpowiedź włączyła się tylko raz
$(document).ready(function(){
	if(typeof(beczka)==='undefined'){
		beczka='konstyntantynopolitańczykowianeczka';
		console.log('0 - kamień, 1 - nożyce, 2 - papier');}});

$(document).ready(function(){
	nadpisz(imie+': <br>Komputer: <br>Wybierz element','wynik');
	nadpisz(imie+'&nbsp;&nbsp;&nbsp;&nbsp;:','wygrane');
});






















