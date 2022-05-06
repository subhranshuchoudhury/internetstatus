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
            i.src= `https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png?${Math.random()+1}`
            // console.log(i.src);
            checkingDisplay.textContent = "🟡 Checking";

        }
    };

})();



cI.online = function(){
    var displayStatus = document.querySelector("#status");
    var displayStatusHolder = document.querySelector("#status-holder");
    var checkingDisplay = document.querySelector("#checking");


    // console.log('online :: '+Date()) 

    displayStatus.textContent = "🟢 ONLINE"
    checkingDisplay.textContent = ".";
    displayStatusHolder.style.borderTop = `10px solid rgb(203, 253, 67)`;
    document.querySelector(".log").textContent = `Online : ${Date()}`;



};
cI.offline = function(){
    var displayStatus = document.querySelector("#status");
    var displayStatusHolder = document.querySelector("#status-holder");
    var checkingDisplay = document.querySelector("#checking");

    displayStatus.textContent = "🔴 OFFLINE";
    checkingDisplay.textContent = ".";
    displayStatusHolder.style.borderTop = `10px solid red`;
    document.querySelector(".log").textContent = `Offline : ${Date()}`;


};

function setDelay(){
    clearInterval(intId);
    var delay = document.querySelector("#delayTime").value*1000;
    document.querySelector(".log").textContent = `You set interval of ${delay/1000} seconds. Kindly wait ${delay/1000} seconds.`
    // console.log(delay);
    var intId = setInterval(function(){
        cI.test()
        // console.log("🟡 Checking")

        delay = 1000;
    },delay);
}

window.addEventListener("offline",()=>{
    
    document.querySelector("#status").textContent = "❌ NOT CONNECTED";

    // console.log("offline")
})







// clearInterval(intId);



// console.log()
