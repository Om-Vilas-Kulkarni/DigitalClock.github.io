let clock = new Date();
    console.log(clock);

    let day = clock.getDay();

    let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    
    let dt =clock.getDate();
    
    let month= clock.getMonth();

    let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    
    let year= clock.getFullYear();
   
    let clkdate = days[day]+", "+dt+" "+months[month]+" "+year;
    
    document.getElementById("livedate").innerHTML = clkdate;

    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();
    

    function displayTime(){
        time = new Date();
        hr = time.getHours();
        min = time.getMinutes();
        sec = time.getSeconds();

        clktime = hr+":"+min+":"+sec;
        console.log(sec);
        document.getElementById("livetime").innerHTML = clktime;
    }
    setInterval(displayTime,1000);
