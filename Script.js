document.getElementById("generateBtn").addEventListener("click", function () {
    const prompt = document.getElementById("prompt").value;
    const image = document.getElementById("image");

    if (prompt.trim() === "") {
        alert("Please enter a prompt!");
        return;
    }

    alert("AI Image Generation feature will be connected in the next step.");

    image.src = "https://picsum.photos/600/400?random=" + Math.floor(Math.random() * 1000);
});
