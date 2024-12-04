const items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("click", () => {
        const previousAsset = document.querySelector(".active");
        item.classList.toggle("active");
        
        if (previousAsset) {
            previousAsset.classList.remove('active');
        }
        
    })
})