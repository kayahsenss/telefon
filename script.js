window.onload = function() {
  const call = document.getElementById("incomingCall");
  setTimeout(() => {
    call.classList.remove("hidden");
    call.classList.add("show");
  }, 3000); // 3 saniye sonra arama geliyor
};

function acceptCall() {
  alert("Arama kabul edildi!");
}

function declineCall() {
  alert("Arama reddedildi!");
}
