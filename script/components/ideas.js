(function () {
  window.Components = window.Components || {};

  const ENTER = { opacity: 0, y: -20, rotationX: 5, skewX: "15deg" };
  const LEAVE = { opacity: 0, y: 20, rotationY: 5, skewX: "-15deg" };
  const VISIBLE = { opacity: 1 };

  window.Components.ideas = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-ideas";

      const lines = section.lines || [];
      lines.forEach((line, i) => {
        const isLast = i === lines.length - 1;
        const p = document.createElement("p");
        p.className = isLast ? "idea-line idea-special" : "idea-line";
        p.innerHTML = line;
        div.appendChild(p);
      });

      // Big letters (e.g. "SO")
      if (section.bigLetters) {
        const p = document.createElement("p");
        p.className = "idea-big-letters";
        p.innerHTML = section.bigLetters
          .split("")
          .map((ch) => `<span>${ch}</span>`)
          .join("");
        div.appendChild(p);
      }

      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const regularLines = el.querySelectorAll(".idea-line:not(.idea-special)");
      const specialLine = el.querySelector(".idea-special");
      const bigLetters = el.querySelectorAll(".idea-big-letters span");

      // Regular lines: enter → wait → leave
      regularLines.forEach((line) => {
        tl.fromTo(line, { ...ENTER }, { opacity: 1, y: 0, rotationX: 0, skewX: "0deg", duration: 0.7 });

        const strong = line.querySelector("strong");
        if (strong) {
          tl.to(strong, {
            duration: 0.5, scale: 1.2, x: 10,
            backgroundColor: "var(--accent)", color: "#fff",
          });
        }

        tl.to(line, { duration: 0.7, ...LEAVE }, "+=2.5");
      });

      // Special last line: dramatic entrance
      if (specialLine) {
        tl.fromTo(specialLine,
          { rotationX: 15, rotationZ: -10, skewY: "-5deg", y: 50, z: 10, opacity: 0 },
          { rotationX: 0, rotationZ: 0, skewY: "0deg", y: 0, z: 0, opacity: 1, duration: 0.7 },
          "+=1.5"
        );

        const span = specialLine.querySelector("span");
        if (span) {
          tl.to(span, { duration: 0.7, rotation: 90, x: 8 }, "+=1.4");
        }

        tl.to(specialLine, {
          duration: 0.7, scale: 0.2, opacity: 0,
        }, "+=2");
      }

      // Big letters: stagger in then out
      if (bigLetters.length) {
        tl.fromTo(bigLetters,
          { scale: 3, opacity: 0, rotation: 15 },
          { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: "expo.out", stagger: 0.2 }
        )
        .to(bigLetters, {
          duration: 0.8, scale: 3, opacity: 0, rotation: -15,
          ease: "expo.out", stagger: 0.2,
        }, "+=1.5");
      }
    },
  };
})();
