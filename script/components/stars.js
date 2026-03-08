(function () {
  window.Components = window.Components || {};

  window.Components.stars = {
    overlay: true,

    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-stars";

      const count = section.count || 40;
      for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = (Math.random() * 3).toFixed(2) + "s";
        star.style.width = star.style.height =
          (Math.random() * 4 + 2).toFixed(1) + "px";
        div.appendChild(star);
      }

      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      tl.fromTo(
        el,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      )
      .to(el, { opacity: 0, duration: 1 }, "+=4");
    },
  };
})();
