let Celsius1=document.querySelector("#celsius");
        let Fahernheit1=document.querySelector("#fahrenheit");
        let Kelvin1=document.querySelector("#kelvin");


        Celsius1.addEventListener("change",()=>{
            Fahernheit1.value=parseInt((Celsius1.value))*1.3+32;
            Kelvin1.value=parseInt(Celsius1.value)+273.15;
        });
        Fahernheit1.addEventListener("change",()=>{
            Celsius1.value=parseInt(Fahernheit1.value)-32*5/9;
            Kelvin1.value=(parseInt(Fahernheit1.value)-32)*5/9+273.15;
        })
        Kelvin1.addEventListener("change",()=>{
            Celsius1.value=parseInt(Kelvin1.value)-273.15;
            Fahernheit1.value=(parseInt(Kelvin1.value)-273.15)*1.3+32;
        })