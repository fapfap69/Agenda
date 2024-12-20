// This script is released to the public domain and may be used, modified and
// distributed without restrictions. Attribution not necessary but appreciated.
// Source: https://weeknumber.com/how-to/javascript

// Returns the ISO week of the date.
Date.prototype.getWeek = function() {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                          - 3 + (week1.getDay() + 6) % 7) / 7);
}
  
// Returns the four-digit year corresponding to the ISO week of the date.
Date.prototype.getWeekYear = function() {
    var date = new Date(this.getTime());
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    return date.getFullYear();
}

// Ritorna il nome del mese
Date.prototype.getMonthName = function() {
    const mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 
                  'Maggio', ' Giugno', 'Luglio', 'Agosto', 
                  'Settempre', 'Ottobre', 'Novembre', 'Dicembre'];
    var data = new Date(this.getTime());
    return mesi[data.getMonth() - 1]; 
}

// Ritorna il nome del giorno
Date.prototype.getDayName = function() {
    const giorni = ['Domenica','Lunedi','Martedi','Mercoledi',
                    'Giovedi','Venerdi','Sabato'];
    var data = new Date(this.getTime());
    return giorni[data.getDay()]; 
}

/*
function getSanto(data) {
    const anno = data.getFullYear();
    const mese = data.getMonth();
    const giorno = data.getDate();
    const url = "https://www.santodelgiorno.it/santi.json?data="+anno+"-"+mese+"-"+giorno;
    const santo = "";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      santo = json[0].nome;
//      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
    return(santo);
}
    */