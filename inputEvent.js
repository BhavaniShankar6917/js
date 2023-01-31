const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
const formData = {};
const creditCard = document.querySelector(".cc");
const selectFruits = document.querySelector(".fruits");
const other = document.querySelector(".other");
for (let input of [creditCard, selectFruits, other]) {
  input.addEventListener("input", ({ target }) => {
    const { name, value } = target;
    formData[name] = value;
  });
}
/*****************HTML****************
<form  class="form">
        <input type="text" class="cc" placeholder="credit-card" name="cc">
        <select title="Favourite Fruit" name="Favourite Fruit" class="fruits">
            <option value="Apple">Apple</option>
            <option value="Orange">Orange</option>
            <option value="Banana">Banana</option>
            <option value="Lemon">Lemon</option>
        </select>
        <input type="text" placeholder="other" class="other" name="fruit"></input>
        <button type="submit" aria-placeholder="submit" class="button">submit</button>
</form>
