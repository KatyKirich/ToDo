const form = document.querySelector(".form");
const data = [];
const card = document.querySelector(".cards");
const submitBtm = document.querySelector(".btn_submit");

const showTask = () => {
  card.innerHTML = "";
  data.forEach((item) => {
    card.innerHTML += `<div class="card_text">
    <h3>${item.note}</h3>
    <p>${item.content}</p>
    <button class="btn_card">&#128394;</button>
    <button class="btn_card">&#128465;</button>
    <button class="btn_card">&#10003;</button>
  </div>`;
  });
};

// const showCard = () => {
//   card.style.display = "block";
// };

submitBtm.addEventListener("click", (event) => {
  event.preventDefault();

  const task = document.querySelector(".task");
  const comment = document.querySelector(".comment");

  data.push({ note: task.value, content: comment.value });

  //   showCard();
  showTask();
  form.reset();
});
