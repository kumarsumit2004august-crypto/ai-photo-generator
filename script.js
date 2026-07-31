const prompt = document.getElementById("prompt");
const generateBtn = document.getElementById("generateBtn");
const image = document.getElementById("image");
const statusText = document.getElementById("status");
const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.style.display = "none";

generateBtn.addEventListener("click", () => {

    if (prompt.value.trim() === "") {
        alert("Please enter a prompt.");
        return;
    }

    statusText.innerHTML = "Generating image...";
    generateBtn.disabled = true;

    setTimeout(() => {

        image.src =
        "https://picsum.photos/1024/1024?random=" +
        Math.floor(Math.random()*100000);

        image.style.display = "block";

        statusText.innerHTML =
        "Demo image generated successfully.";

        downloadBtn.style.display = "block";

        generateBtn.disabled = false;

    },2000);

});

downloadBtn.addEventListener("click",()=>{

    const a=document.createElement("a");

    a.href=image.src;

    a.download="AI-Image.jpg";

    a.click();

});
