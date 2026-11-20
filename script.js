const controls = document.querySelector(".controls");

if (controls) {
  controls.addEventListener("click", (event) => {
    const paneId = event.target.dataset.id;
    if (!paneId) {
      return;
    }

    const prevActivePane = document.querySelector(".pane.is-active");
    if (prevActivePane) {
      prevActivePane.classList.remove("is-active");
    }

    const nextActivePane = document.querySelector(`#${CSS.escape(paneId)}`);
    if (nextActivePane) {
      nextActivePane.classList.add("is-active");
    }
  });
}
