(function () {
  window.Components = window.Components || {};

  window.Components.chatbox = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-chatbox";
      div.innerHTML = `
        <div class="text-box">
          <p class="hbd-chatbox"></p>
          <p class="fake-btn">${section.buttonText || "Send"}</p>
        </div>
      `;
      // Split message into individual character spans for typing animation
      const chatbox = div.querySelector(".hbd-chatbox");
      const msg = section.message || "Happy Birthday!";
      chatbox.innerHTML = msg
        .split("")
        .map((ch) => `<span>${ch}</span>`)
        .join("");

      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const spans = el.querySelectorAll(".hbd-chatbox span");
      tl.from(el.querySelector(".text-box"), {
        duration: 0.7, scale: 0.2, opacity: 0,
      })
      .from(el.querySelector(".fake-btn"), {
        duration: 0.3, scale: 0.2, opacity: 0,
      })
      .to(spans, {
        duration: 1.5, visibility: "visible", stagger: 0.05,
      })
      .to(el.querySelector(".fake-btn"), {
        duration: 0.1, backgroundColor: "rgb(127, 206, 248)",
      }, "+=4")
      .to(el.querySelector(".text-box"), {
        duration: 0.5, scale: 0.2, opacity: 0, y: -150,
      }, "+=1");
    },
  };
})();
