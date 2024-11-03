document.getElementById("toggleButton").addEventListener("click", () => {
    const moreText = document.getElementById("more");
    const toggleButton = document.getElementById("toggleButton");
  
    // Toggle visibilitas teks tambahan
    moreText.classList.toggle("hidden");
  
    // Mengubah teks tombol sesuai dengan status
    if (moreText.classList.contains("hidden")) {
      toggleButton.textContent = "Show More";
    } else {
      toggleButton.textContent = "Show Less";
    }
  });
  