const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = `https://www.google.com/search?q=${input}&rlz=1C1CHBF_enIN981IN981&oq=${input}&aqs=chrome..69i57.7987j0j7&sourceid=chrome&ie=UTF-8`
}