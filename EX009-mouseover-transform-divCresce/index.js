const primeiradiv = document.getElementById("primeiradiv");
const segundadiv = document.getElementById("segundadiv");
const button5 = document.getElementById("button");
const pai = document.getElementById("pai");




primeiradiv.addEventListener('mouseover', function () {
    segundadiv.style.top = "0px";
    segundadiv.style.opacity = "1";
});


segundadiv.addEventListener('mouseover', function () {
    segundadiv.style.top = "0px";
    segundadiv.style.opacity = "1";
});

segundadiv.addEventListener('mouseout', function () {
    segundadiv.style.top = "-25%";
    segundadiv.style.opacity = "0";
});


primeiradiv.addEventListener('mouseout', function () {
    segundadiv.style.top = "-25%";
    segundadiv.style.opacity = "1";
});

pai.addEventListener('mouseover', function () {
    button5.style.transform = "scale(1.3)";
    button5.style.transition = "all 2s ease-in-out";
    button5.style.backgroundColor = "#24abfa";
});

pai.addEventListener('mouseout', function () {
    button5.style.transition = "none";
    button5.style.transform = "none";
    button5.style.backgroundColor = "transparent";
});



