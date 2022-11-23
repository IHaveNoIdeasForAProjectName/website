const app = document.getElementById("app");

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    const newColorScheme = event.matches ? () => {
        app.classList.remove("bg-light", "text-dark");
        app.classList.add("bg-dark", "text-light");
    }: () => {
        app.classList.remove("bg-dark", "text-light");
        app.classList.add("bg-light", "text-dark");
    };
});