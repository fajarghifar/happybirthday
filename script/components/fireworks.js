(function () {
  window.Components = window.Components || {};

  window.Components.fireworks = {
    overlay: true,

    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-fireworks";

      const count = section.count || 20;
      const colors = ["#ff69b4", "#15a1ed", "#f9d423", "#42e695", "#bd6ecf", "#ff6b6b", "#ffd93d"];

      for (let i = 0; i < count; i++) {
        const spark = document.createElement("div");
        spark.className = "firework-spark";
        spark.style.left = (Math.random() * 90 + 5) + "%";
        spark.style.top = (Math.random() * 70 + 10) + "%";
        spark.style.backgroundColor = colors[i % colors.length];
        spark.style.width = spark.style.height = (Math.random() * 6 + 4) + "px";
        div.appendChild(spark);
      }

      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const sparks = el.querySelectorAll(".firework-spark");

      tl.fromTo(sparks,
        { scale: 0, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.3,
          stagger: { each: 0.08, from: "random" },
          ease: "back.out(2)",
        }
      )
      .to(sparks, {
        y: () => (Math.random() - 0.5) * window.innerHeight * 0.4,
        x: () => (Math.random() - 0.5) * window.innerWidth * 0.4,
        opacity: 0, scale: 0, duration: 1.2,
        stagger: { each: 0.05, from: "random" },
        ease: "power2.out",
      }, "+=0.5")
      .to(el, { opacity: 0, duration: 0.3 });
    },
  };
})();
