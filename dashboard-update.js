
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const gamesContainer = document.getElementById("games-container")
    if (!gamesContainer) return
    
    const sendTokensCard = document.createElement("div")
    sendTokensCard.className = "game-card"
    sendTokensCard.setAttribute("data-game", "send-tokens")
    
    sendTokensCard.innerHTML = `
            <div class="game-image">
                <i class="fas fa-paper-plane"></i>
                <div class="game-badge">New</div>
            </div>
            <div class="game-info">
                <h3 class="game-title">
                    <i class="fas fa-paper-plane"></i> Send Tokens
                    <span class="new-badge"></span>
                </h3>
                <p class="game-desc">
                    Send Voltz tokens to your friends and other players on Voltunix Casino.
                </p>
                <div class="game-stats">
                    <div class="stat-item">
                        <i class="fas fa-exchange-alt"></i> P2P Transfers
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-bolt"></i> Instant
                    </div>
                </div>
                <button class="play-btn pulse-animation">
                    <i class="fas fa-paper-plane"></i> Send Tokens
                </button>
            </div>
        `
    
    gamesContainer.appendChild(sendTokensCard)
    
    const playBtn = sendTokensCard.querySelector(".play-btn")
    playBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      window.location.href = "send-tokens.html"
    })
    
    sendTokensCard.addEventListener("click", (e) => {
      if (!e.target.closest(".play-btn")) {
        window.location.href = "send-tokens.html"
      }
    })
    
    setTimeout(() => {
      playBtn.classList.remove("pulse-animation")
    }, 5000)
  }, 500)
})
