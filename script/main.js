// animation timeline
const animationTimeLine = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  // timeline
  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible"
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10
    })
    .to(".one",
      0.7,
      {
        opacity: 0,
        y: 10
      },
    "+=2.5")
    .to(".two",
      0.7,
      {
        opacity: 0,
        y: 10
      },
    "-=1")

    .from(".three", 0.7, {
      opacity: 0,
      y: 10
    })
    .to(".three",
      0.7,
      {
        opacity: 0,
        y: 10
      },
    "+=2")

    // section four
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      1.5, {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      0.5, {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.7"
    )
}

animationTimeLine();
