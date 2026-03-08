(function () {
  window.Components = window.Components || {};

  const SVGS = ["ballon1.svg", "ballon2.svg", "ballon3.svg"];

  window.Components.balloons = {
    overlay: true,

    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-balloons";

      const count = section.count || 30;
      for (let i = 0; i < count; i++) {
        const img = document.createElement("img");
        img.src = `img/${SVGS[i % SVGS.length]}`;
        img.alt = "balloon";
        div.appendChild(img);
      }

      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const imgs = el.querySelectorAll("img");
      tl.fromTo(
        imgs,
        { opacity: 0.9, y: 1400 },
        { opacity: 1, y: -1000, duration: 2.5, stagger: 0.2 }
      );
    },
  };
})();
