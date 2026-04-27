# 🎂 Happy Birthday Animation

A beautiful, animated birthday greeting page built with **Vanilla JavaScript** and **GSAP**. Fully customizable through a single config file — no coding skills required!

## ✨ Features

- 🎬 Smooth GSAP animations (typing effect, floating balloons, confetti, fireworks, and more)
- 🧩 Modular component system — add, remove, or reorder sections by editing one file
- 🌙 Dark / Light mode toggle
- 📱 Responsive and mobile-friendly
- 🎵 Optional background music
- ⚡ No build step, no framework, no server required

## 🚀 Quick Start

1. **Download or clone** this repository
2. **Edit `config.js`** to customize the name, photo, message, and sections
3. **Right-click `index.html`** → **Open with Live Server** (VS Code) or simply open it in your browser

> **Tip:** If you use [VS Code](https://code.visualstudio.com/), install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension. Then right-click `index.html` and select **"Open with Live Server"**. That's it!

---

## 📝 How to Customize

Everything is controlled from **one file: `config.js`**.

### 1. Change the Recipient

```javascript
name: "Kashaf Aiman",                        // Recipient's name
photo: "./img/kashaf.jpg",             // Photo in the img/ folder
music: "./music/hbd.mpeg",            // Music in the music/ folder
```

### 2. Choose a Theme

```javascript
defaultMode: "dark",                   // "dark" or "light"
colors: {
  primary: "#f472b6",                  // Main accent (name, highlights)
  accent: "#60a5fa",                   // Secondary accent (buttons)
  dark:  { background: "#0f172a", text: "#f1f5f9" },
  light: { background: "#fafaf9", text: "#1e293b" },
},
```

The viewer can also toggle between dark and light mode using the ☀️/🌙 button.

### 3. Edit Sections

Sections are listed in an array. The display order matches the array order.

**Remove a section** — delete the object:
```javascript
sections: [
  { type: "greeting", title: "Hi", subtitle: "..." },
  // { type: "announcement", text: "..." },  ← removed
  { type: "chatbox", message: "..." },
]
```

**Duplicate a section** — copy-paste the object:
```javascript
{ type: "balloons", count: 25 },
{ type: "balloons", count: 15 },      // shows balloons twice!
```

**Reorder** — just move them up or down in the array.

---

## 🧩 Available Section Types

| Type | Description | Properties |
|------|-------------|------------|
| `greeting` | Opening greeting with name | `title`, `subtitle` |
| `countdown` | Animated 3-2-1 countdown | `from` (start number), `goText` (finale emoji/text) |
| `announcement` | Simple announcement text | `text` |
| `chatbox` | Chat bubble with typing effect | `message`, `buttonText` |
| `ideas` | Lines revealed one by one | `lines[]`, `bigLetters` |
| `quote` | Styled quote card | `text`, `author` (optional) |
| `stars` | Twinkling stars background | `count` |
| `fireworks` | Colorful spark burst | `count` |
| `balloons` | Floating balloons | `count` |
| `profile` | Profile photo + wish text | `wishTitle`, `wishText` |
| `confetti` | Confetti circle burst | `count` |
| `closing` | Closing message + replay | `text`, `replayText` |

### Section Details

<details>
<summary><strong>greeting</strong></summary>

```javascript
{ type: "greeting", title: "Hi", subtitle: "I really like your name btw!" }
```
Shows the recipient's `name` (from top-level config) with a gradient effect.
</details>

<details>
<summary><strong>countdown</strong></summary>

```javascript
{ type: "countdown", from: 3, goText: "🎉" }
```
Animated countdown from `from` to 1, then shows `goText`. Great before announcements!
</details>

<details>
<summary><strong>chatbox</strong></summary>

```javascript
{ type: "chatbox", message: "Happy birthday!!", buttonText: "Send" }
```
Simulates a chat with a typing animation that reveals the message character by character.
</details>

<details>
<summary><strong>ideas</strong></summary>

```javascript
{
  type: "ideas",
  lines: [
    "A normal line.",
    "A line with <strong>bold highlight</strong>.",
    "Last line gets special animation <span>:)</span>",
  ],
  bigLetters: "SO",
}
```
- Each line appears and disappears sequentially
- Use `<strong>` for highlighted words
- The **last line** automatically gets a dramatic animation
- `bigLetters` (optional) — large staggered characters after all lines
</details>

<details>
<summary><strong>quote</strong></summary>

```javascript
{ type: "quote", text: "Every year is a gift.", author: "Unknown" }
```
Glassmorphism card with quotation mark, text, and optional author attribution.
</details>

<details>
<summary><strong>fireworks</strong></summary>

```javascript
{ type: "fireworks", count: 24 }
```
Colorful sparks that burst and scatter in random directions. Overlays on top of other content.
</details>

---

## 📁 Project Structure

```
happybirthday/
├── config.js                ← ✨ EDIT THIS FILE ONLY
├── index.html               ← Page template (do not edit)
├── script/
│   ├── main.js              ← Engine (do not edit)
│   └── components/          ← Section components
│       ├── greeting.js
│       ├── announcement.js
│       ├── chatbox.js
│       ├── countdown.js
│       ├── ideas.js
│       ├── quote.js
│       ├── stars.js
│       ├── fireworks.js
│       ├── balloons.js
│       ├── profile.js
│       ├── confetti.js
│       └── closing.js
├── style/
│   └── main.css             ← Styles (do not edit)
├── img/                     ← Put recipient's photo here
└── music/                   ← Put background music here
```

---

## 🔧 Creating Your Own Component

Create a `.js` file in `script/components/` following this template:

```javascript
(function () {
  window.Components = window.Components || {};

  window.Components.mycomponent = {
    // overlay: true,  ← Set true if it layers on top of other sections

    render(container, section, config) {
      const div = document.createElement("div");
      div.className = "section section-mycomponent";
      div.innerHTML = `<p>${section.text || "Hello!"}</p>`;
      container.appendChild(div);
      return div;
    },

    animate(tl, el, config) {
      tl.from(el, { duration: 0.7, opacity: 0, y: 20 })
        .to(el, { duration: 0.7, opacity: 0 }, "+=3");
    },

    // Optional: deferred exit (runs after overlays finish)
    // exit(tl, el) {
    //   tl.to(el, { duration: 0.5, opacity: 0 });
    // },
  };
})();
```

Then use it in `config.js`:
```javascript
{ type: "mycomponent", text: "My custom section!" }
```

Don't forget to add CSS for `.section-mycomponent` in `style/main.css`.

---

## 🛠️ Built With

- [GSAP 3](https://greensock.com/gsap/) — Animation engine
- [SweetAlert2](https://sweetalert2.github.io/) — Alert dialogs
- [Poppins](https://fonts.google.com/specimen/Poppins) — Google Font

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 💖 Support

If you find this project helpful, please consider giving it a ⭐️ star on GitHub or buying me a coffee!

<a href="https://buymeacoffee.com/fajarghifar" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

> Find me on [GitHub](https://github.com/fajarghifar) &nbsp;&middot;&nbsp; [YouTube](https://www.youtube.com/@fajarghifar) &nbsp;&middot;&nbsp; [Instagram](https://instagram.com/fajarghifar) &nbsp;&middot;&nbsp; [LinkedIn](https://www.linkedin.com/in/fajarghifar/)

---
