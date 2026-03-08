(function () {
  window.Components = window.Components || {};

  // Softer, modern confetti colors
  const PRESETS = [
    { fill: "#c084fc", left: "8vw",   top: "10vh"  },
    { fill: "#67e8f9", left: "30vw",  top: "20vh"  },
    { fill: "#fbbf24", left: "55vw",  top: "15vh"  },
    { fill: "#f472b6", left: "75vw",  top: "30vh"  },
    { fill: "#a78bfa", left: "15vw",  top: "50vh"  },
    { fill: "#34d399", left: "60vw",  top: "55vh"  },
    { fill: "#fb923c", left: "85vw",  top: "45vh"  },
    { fill: "#60a5fa", left: "40vw",  top: "70vh"  },
    { fill: "#f9a8d4", left: "20vw",  top: "80vh"  },
  ];

  window.Components.confetti = {
    overlay: true,

    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-confetti";

      const count = Math.min(section.count || 9, PRESETS.length);
      for (let i = 0; i < count; i++) {
        const p = PRESETS[i];
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 40 40");
        svg.classList.add("confetti-dot");
        svg.style.fill = p.fill;
        svg.style.left = p.left;
        svg.style.top = p.top;

        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", "20");
        circle.setAttribute("cy", "20");
        circle.setAttribute("r", "20");
        svg.appendChild(circle);
        div.appendChild(svg);
      }

      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      // Shorter, less intrusive confetti — scale smaller, fewer repeats
      tl.to(el.querySelectorAll(".confetti-dot"), {
        duration: 1, visibility: "visible", opacity: 0,
        scale: 40, repeat: 2, repeatDelay: 0.8, stagger: 0.15,
      })
      .to(el, { duration: 0.3, opacity: 0 });
    },
  };
})();
