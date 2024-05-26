function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const formattedDate = now.toLocaleDateString('es-ES', options);

    document.getElementById("header-info").innerText = "Fecha y hora actual: " + formattedDate;
}
setInterval(updateTime, 1000);
updateTime();
