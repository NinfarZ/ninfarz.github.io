const changeThemeButton = document.querySelector(".change-theme__btn");
const scaryFace = document.querySelector(".scary-face");


//handles the image switch between dark/light theme

changeThemeButton.addEventListener("click", () => {
    const body = document.querySelector("body");
    if (!body.classList.contains("darkmode")) {
        document.querySelector("body").classList.add("darkmode");
        spiralThemeHandler("dark");
        lampThemeHandler("dark");
        scaryFace.style.display = "block";
    }

    else {
        document.querySelector("body").classList.remove("darkmode");
        spiralThemeHandler("light");
        lampThemeHandler("light");
        scaryFace.style.display = "none";

    }
})

function lampThemeHandler(changeToTheme) {
    const lamp = document.querySelector(".lamp__img");
    const newSrcName = getNewSrcName(changeToTheme, "lamp");
    changeImg(lamp, newSrcName + ".png");


}

function spiralThemeHandler(changeToTheme) {
    const spiralArray = document.querySelectorAll(".spiral__img");

    for (let i = 0; i < spiralArray.length; i++) {
        let newSrcName = getNewSrcName(changeToTheme, "spiral");
        if (i % 2 === 0) newSrcName = `${newSrcName}.png`;
        else newSrcName = `${newSrcName}2.png`;
        changeImg(spiralArray[i], newSrcName);

    }
}

function changeImg(element, srcImg) {
    element.src = srcImg;

}

function getNewSrcName(changeToTheme, elementName) {
    return changeToTheme === "dark" ? `img/${elementName}-dark` : `img/${elementName}`;
}


//handle the scary monster face that peeks in the dark
const projectsHeader = document.querySelector(".projects__title");
const projectName = document.querySelector(".project__p-name");



const scaryFaceTriggerObserver = new IntersectionObserver(function (
    entries,
) {
    let isTargetSeen = false;
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            isTargetSeen = true;

        }

    })

    if (!isTargetSeen) scaryFace.classList.remove("hide-scary-face");
    else hideFaceDelay();


});


scaryFaceTriggerObserver.observe(projectsHeader);
//scaryFaceTriggerObserver.observe(projectName);

function hideFaceDelay() {
    scaryFace.classList.add("hide-scary-face");

}