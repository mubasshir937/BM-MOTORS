const form = document.getElementById("contact-form");
console.log("lslsl", form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(form);

  const formDataObj = {};
  fd.forEach((value, key) => (formDataObj[key] = value));
  console.log(formDataObj);
  form.reset();
  alert("are you sure");
});
