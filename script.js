console.log("JS IS RUNNING");
canvas.addEventListener('mousedown', (e) => {
    if(!gameActive) return;

    const dx = e.clientX - match.bx;
    const dy = e.clientY - match.by;

    const dist = Math.hypot(dx, dy);

    if(dist < 80){
        playerProfile.bearClicks++;

        console.log("click:", playerProfile.bearClicks);

        if(playerProfile.bearClicks === 2){
            playerProfile.hasBazooka = true;
            alert("🔫 BAZOOKA UNLOCKED!");
        }
    }
});
