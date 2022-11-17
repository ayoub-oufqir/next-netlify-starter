var lol =()=>{
    if (process.browser) {
        const grpDiv = document.getElementById("group-div");
        grpDiv?.addEventListener("click", () => console.log('Hiiiiiiiiiii'))
        console.log('first')
    }
}
lol()