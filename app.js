// Blood moon toggle + signup micro-interaction (clean)
const toggleThemeBtn = document.getElementById("toggleTheme");
const signupForm = document.getElementById("signupForm");

function setBloodMoon(on) {
  document.documentElement.dataset.bloodmoon = on ? "on" : "off";
  localStorage.setItem("bloodmoon", on ? "on" : "off");
}

(() => {
  const saved = localStorage.getItem("bloodmoon");
  setBloodMoon(saved === "on");

  toggleThemeBtn?.addEventListener("click", () => {
    const isOn = document.documentElement.dataset.bloodmoon === "on";
    setBloodMoon(!isOn);
  });

  signupForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = new FormData(signupForm).get("email");
    const hint = signupForm.querySelector(".form__hint");
    if (hint) {
      hint.textContent = `Signed. We'll haunt: ${email}`;
      hint.style.color = "rgba(255,255,255,.72)";
    }
    signupForm.reset();
  });
})();