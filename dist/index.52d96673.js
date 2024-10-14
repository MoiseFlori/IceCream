(()=>{
    const refs = {
        openPopupBtn: document.querySelector("[data-popup-open]"),
        closePopupBtn: document.querySelector("[data-popup-close]"),
        closePopupLink: document.querySelector(".popup-nav"),
        popup: document.querySelector("[data-popup]")
    };
    // Evenimente pentru deschiderea și închiderea pop-up-ului
    refs.openPopupBtn?.addEventListener("click", togglePopup); // Verificăm dacă există elementul pentru deschidere
    refs.closePopupBtn.addEventListener("click", togglePopup);
    refs.closePopupLink.addEventListener("click", togglePopup);
    function togglePopup() {
        refs.popup.classList.toggle("is-hidden"); // Adaugă sau elimină clasa pentru a ascunde/arăta pop-up-ul
        // Adăugăm sau eliminăm clasa 'no-scroll' pe body pentru a dezactiva/reactiva scroll-ul
        document.body.classList.toggle("no-scroll");
    }
})();

//# sourceMappingURL=index.52d96673.js.map
