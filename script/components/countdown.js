(function () {
  window.Components = window.Components || {};

  window.Components.countdown = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-countdown";

      const numbers = [];
      const start = section.from || 3;
      for (let i = start; i >= 1; i--) numbers.push(i);

      div.innerHTML = `
        <div class="countdown-wrapper">
          ${numbers.map((n) => `<span class="countdown-num">${n}</span>`).join("")}
          <span class="countdown-go">${section.goText || "🎉"}</span>
        </div>
      `;
      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const nums = el.querySelectorAll(".countdown-num");
      const go = el.querySelector(".countdown-go");

      nums.forEach((num) => {
        tl.fromTo(num,
          { scale: 0, opacity: 0, rotation: -180 },
          { scale: 1, opacity: 1, rotation: 0, duration: 0.5, ease: "back.out(1.7)" }
        )
        .to(num, { scale: 2, opacity: 0, duration: 0.4 }, "+=0.8");
      });

      tl.fromTo(go,
        { scale: 0, opacity: 0 },
        { scale: 1.2, opacity: 1, duration: 0.6, ease: "elastic.out(1, 0.5)" }
      )
      .to(go, { scale: 0, opacity: 0, duration: 0.4 }, "+=1.5");
    },
  };
})();
