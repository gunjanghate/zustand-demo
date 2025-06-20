# 🗂️ Zustand Demo — Kanban Task Tracker

A Next.js app showcasing global state management, drag‑and‑drop, and data persistence using [Zustand](https://zustand-demo) and [ShadCN UI](https://ui.shadcn.com). This app demonstrates how to build a Kanban-style task manager with TypeScript, Tailwind, and Next.js.

---

## 🚀 Features

* ⚛️ **Lightweight State Management** — Uses Zustand for global state (no Provider needed).
* 📊 **Kanban Board** — Organize tasks across `To-do`, `In Progress`, and `Done` columns.
* 📝 **Add Tasks** — Create new tasks with titles and descriptions using a ShadCN UI modal.
* 🎯 **Drag‑and‑Drop** — Native HTML5 drag‑and‑drop for seamless status changes.
* 🗑️ **Delete Tasks** — Simple delete action connected to the global state.
* 💾 **Persistence** — State saved in `localStorage` using Zustand’s `persist` middleware.
* 🌊 **SSR‑Safe Hydration** — Avoid Next.js hydration mismatches by rehydrating state only on the client.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) + TypeScript
* **UI:** Tailwind CSS + [ShadCN UI](https://ui.shadcn.com/)
* **State Management:** [Zustand](https://zustand-demo) (global state + `persist`)
* **Drag‑and‑Drop:** Native HTML5 APIs
* **Deployment:** Works seamlessly across Next.js server and client environments

---

## 🌟 Key Insights

✅ **Better DX:** Zustand’s combined state and action model reduces boilerplate compared to Redux.
✅ **Optimized Renders:** Substate selectors ensure only relevant components re‑render.
✅ **Strong Typing:** TypeScript guarantees correctness across state, making refactoring safe.
✅ **Customizability:** ShadCN + Tailwind = rapid, highly customizable design.
✅ **Resilient SSR:** `skipHydration` + client rehydration prevent Next.js SSR/local storage issues.
✅ **Real‑World Use:** Persistent state makes this app suitable for productivity and task‑management scenarios.

---

## ⚡️ Getting Started

### Prerequisites

* Node.js 18+
* npm or Yarn

### Install

```bash
git clone https://github.com/gunjanghate/zustand-demo.git
cd zustand-demo
npm install
```

### Run

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 🐳 Demo Features

* Drag tasks between columns.
* Add new tasks via a ShadCN dialog.
* Delete tasks with one click.
* State is saved in `localStorage`, reloaded on page refresh.

---

## ⚡️ Architecture

* **App Directory** (Next.js 14-style): Server components with Client transitions.
* **Zustand Store**:

  * State + Actions combined
  * `persist` middleware for `localStorage`
  * `skipHydration` for Next.js SSR compatibility
* **Components**:

  * Modular structure for Columns, Task Items, and Modals
  * Tailwind + ShadCN UI for seamless customization.

---

## ⚡️ Learnings

* State libraries like Zustand reduce boilerplate versus traditional state patterns.
* Client hydration patterns matter when dealing with Next.js and `localStorage`.
* Drag‑and‑drop can be implemented cleanly with native APIs and global state.

---

## 🙏 Acknowledgments

* [Zustand](https://zustand-demo) for making state management so clean and simple.
* [ShadCN UI](https://ui.shadcn.com/) for making component design enjoyable.
* [Next.js](https://nextjs.org/) for providing a robust full‑stack React framework.

---

## 👇 Links
* GitHub: [gunjanghate/zustand-demo](https://github.com/gunjanghate/zustand-demo)

