(function () {
  window.Components = window.Components || {};

  window.Components.quote = {
    render(container, section) {
      const div = document.createElement("div");
      div.className = "section section-quote";
      div.innerHTML = `
        <div class="quote-card">
          <span class="quote-mark">"</span>
          <p class="quote-text">${section.text || "Every year is a gift."}</p>
          ${section.author ? `<p class="quote-author">— ${section.author}</p>` : ""}
        </div>
      `;
      container.appendChild(div);
      return div;
    },

    animate(tl, el) {
      const card = el.querySelector(".quote-card");
      const mark = el.querySelector(".quote-mark");
      const text = el.querySelector(".quote-text");
      const author = el.querySelector(".quote-author");

      tl.from(card, { duration: 0.6, opacity: 0, scale: 0.9, y: 30 })
        .from(mark, { duration: 0.4, opacity: 0, scale: 3, rotation: -20 }, "-=0.2")
        .from(text, { duration: 0.5, opacity: 0, y: 15 }, "-=0.1");

      if (author) {
        tl.from(author, { duration: 0.4, opacity: 0, x: -20 });
      }

      tl.to(card, { duration: 0.6, opacity: 0, y: -20 }, "+=4");
    },
  };
})();
