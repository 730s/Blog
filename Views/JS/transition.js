document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", event => {
            const href = link.getAttribute("href");

            if (!href || href.startsWith("#") || href.startsWith("javascript")) return;

            event.preventDefault(); 

            document.body.classList.remove("fade-in");
            document.body.style.opacity = 0;
            document.body.style.filter = "blur(8px)";

            setTimeout(() => {
                window.location.href = href;
            }, 250); 
        });
    });
});
