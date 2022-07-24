//variables

let year = document.querySelector('#year'), 
    currentYear = new Date().getFullYear(),
  

    persianYear = currentYear - 621;



    for (let i = 0; i < 21; i++) {
    

        let yearCount = document.createElement("option");
        if ( i == 0){
            yearCount.value = persianYear;
            yearCount.innerHTML = persianYear
        }else {
            yearCount.value = persianYear--;
            yearCount.innerHTML = persianYear--
        }
        
        year.appendChild(yearCount)
    
    }