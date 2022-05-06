// // const URL = "https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png";

const checkOnlineStatus = async () => {
    try {
      const online = await fetch("test.png");
      return online.status >= 200 && online.status < 300; // either true or false
    } catch (err) {
      return false; // definitely offline
    }
  };

  setInterval(async () => {
    const result = await checkOnlineStatus();
    console.log(result)
    const statusDisplay = document.getElementById("status");
    statusDisplay.textContent = result ? "Online" : "OFFline";
  }, 3000); // probably too often, try 30000 for every 30 seconds


  window.addEventListener("load", async (event) => {
    const statusDisplay = document.getElementById("status");
    statusDisplay.textContent = (await checkOnlineStatus())
      ? "Online"
      : "OFFline";
  });