const audio = new Audio("error.wav");
let detector = 0;
var cI = (function() {


    return {
        online: function() { },
        offline: function() { },
        test: function() {
            var displayStatus = document.querySelector("#status");
            var checkingDisplay = document.querySelector("#checking");
            var i = new Image();
            i.onload = this.online;
            i.onerror = this.offline;
            i.src= `https://raw.githubusercontent.com/subhranshuchoudhury/internetstatus/main/test.png?${String(Date())}`;
            checkingDisplay.textContent = "[ 🟡 Checking ]";

        }
    };

})();



cI.online = function(){
    detector = 1;
    var displayStatus = document.querySelector("#status");
    var displayStatusHolder = document.querySelector("#status-holder");
    var checkingDisplay = document.querySelector("#checking");
    displayStatus.textContent = "🚀 ONLINE";
    displayStatus.style.color = "rgb(203, 253, 67)"
    checkingDisplay.textContent = "[Wait..]";
    document.body.style.backgroundColor = "rgb(49, 43, 43)";
    displayStatusHolder.style.borderTop = `30px solid rgb(203, 253, 67)`;
    document.querySelector(".log").textContent = `Online : ${Date()}`;
};
cI.offline = function(){
    var displayStatus = document.querySelector("#status");
    var displayStatusHolder = document.querySelector("#status-holder");
    var checkingDisplay = document.querySelector("#checking");
    displayStatus.textContent = "🚫 OFFLINE";
    displayStatus.style.color = "white";
    document.body.style.backgroundColor = 'red';
    audio.play();
    checkingDisplay.textContent = "[Wait..]";
    displayStatusHolder.style.borderTop = `30px solid red`;
    document.querySelector(".log").textContent = `Offline : ${Date()}`;


};

function setDelay(){
    document.getElementById("timerTable").style.display = "none";
    var delay = document.querySelector("#delayTime").value*1000;
    if(delay>=3000){

    }else{
        delay = 3000;
        alert("Delay can't be less than 3 Seconds!");
    }
    document.querySelector(".log").textContent = `You set interval of ${delay/1000} seconds. Kindly wait ${delay/1000} seconds.`
    var intId = setInterval(function(){
        detector = 0;
        cI.test()
        
        

    },delay);

    setInterval(function(){
        if(detector==0){
            cI.offline()
        }
    },delay+800);
}

window.addEventListener("offline",()=>{
    document.querySelector("#status").textContent = "❌ NOT CONNECTED";
    audio.play();
})


function moreDetails(){
    const moreDetails = document.getElementById("moreDetails");
    console.log(navigator)
    moreDetails.innerHTML = `Server Details: ${navigator.userAgent}`;
}



