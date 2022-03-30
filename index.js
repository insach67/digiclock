//  clock part
function clock(){
    var ahr = document.getElementById("hour");
    var amin = document.getElementById("min");
    var asec = document.getElementById("sec");
    var aam = document.getElementById("ampm");


    var time = new Date();

    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";


    if (hrs == 0) {
        hrs = 12;
    }

    if (hrs > 12) {
        hrs = hrs - 12;
        am_pm = "PM";
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    ahr.innerText = hrs;
    amin.innerText = mins ;
    asec.innerText = secs ;
    aam.innerText = am_pm;
    
};
setInterval(clock,1000);
// selection part
function sachin(){
   wokeuptime=document.getElementById("wokeuptime");
    lnchtime=document.getElementById("lnchtime")
   evningtime=document.getElementById("evningtime")
   nighttimes=document.getElementById("nighttimes")
  
   wakeup = document.getElementById("wakeup")
   lunchtime = document.getElementById("lunchtime")
   eveningtime = document.getElementById("eveningtime")
   nighttime = document.getElementById("nighttime")

  wokeuptime.innerText = wakeup.options[wakeup.selectedIndex].text;
  lnchtime.innerText = lunchtime.options[lunchtime.selectedIndex].text;
  evningtime.innerText = eveningtime.options[eveningtime.selectedIndex].text;
  nighttimes.innerText = nighttime.options[nighttime.selectedIndex].text;



  let i = document.getElementById("wakeup").value;
  let j = document.getElementById("lunchtime").value;
  let k = document.getElementById("eveningtime").value;
  let l = document.getElementById("nighttime").value;
  let newtime = new Date().getHours();
 


  if (i == newtime) {
    document.getElementById("imagepasting").style.backgroundImage=
      "url(./wakeup.png)";
    document.getElementById("texting2").innerText =
      " HI GOOD MORNING !! ";
    document.getElementById("texting1").innerText = "LET'S HAVE BREAKFAST !!";
  }

  if (j == newtime) {
    document.getElementById("imagepasting").style.backgroundImage=
      "url(./lunch.png)";
    document.getElementById("texting2").innerText =
      "GOOD AFTERNOON !! ";
    document.getElementById("texting1").innerText = "LET'S HAVE SOME LUNCH !!";
  }
  if (k == newtime) {
    document.getElementById("imagepasting").style.backgroundImage=
      "url(./evening.png)";
    document.getElementById("texting2").innerText =
      "GOOD EVENING !! ";
    document.getElementById("texting1").innerText = "IT'S COFFEE TIME !!";
  }
  if (l== newtime) {
    document.getElementById("imagepasting").style.backgroundImage=
      "url(./night.png)";
    document.getElementById("texting2").innerText =
      "GOOD NIGHT!! TAKE SOME SLEEP";
    document.getElementById("texting1").innerText = "LET'S HAVE SOME DINNER !!";
  }
  if (i != newtime && j != newtime && k != newtime && l != newtime) {
    document.getElementById("imagepasting").style.backgroundImage=
      "url(./partyy.jpg)";
    document.getElementById("texting2").innerText = "Party Time!";
    document.getElementById("texting1").innerText = "Lets ENJOY !!!";
  }
};

// function sachin(){
//     document.getElementById("imagepasting").style.backgroundImage="url(./lunch.png)";
//     // elem.innerText="sachin how are you"
//     // let elems=document.getElementById("texting1")
//     // elems.innerText="sachin how are you"
//     let elems=document.getElementById("select1")
//     // elems.innerText="sachin how are you"
//     console.log(elems)
    

// }


