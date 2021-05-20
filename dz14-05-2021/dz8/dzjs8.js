
	var edin = prompt('Введите еденицу измирения (GB, MB, KB, B)');
	var znach = prompt('Сколько ' + edin);
	var konvert = prompt('В какую еденицу конвертировать (GB, MB, KB, B)');

	var itogVBaitah;
	if(edin == 'GB'){
		itogVBaitah = znach * Math.pow(1024,3);
	} else if (edin == 'MB'){
		itogVBaitah = znach * Math.pow(1024,2);
	} else if (edin == 'KB'){
		itogVBaitah = znach * Math.pow(1024,1);
	} else if (edin == 'B'){
		itogVBaitah = znach;
	} 

	var itog;
	if(konvert == 'GB'){
		itog = itogVBaitah / Math.pow(1024,3);
	} else if (konvert == 'MB'){
		itog = itogVBaitah / Math.pow(1024,2);
	} else if (konvert == 'KB'){
		itog = itogVBaitah / Math.pow(1024,1);
	} else if (konvert == 'B'){
		itog = itogVBaitah;
	} 


	alert(znach + edin + ' = ' + itog + konvert);
