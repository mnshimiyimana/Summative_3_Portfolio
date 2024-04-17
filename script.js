document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nameInput = document.querySelector('input[placeholder="Name"]');
  const emailInput = document.querySelector('input[placeholder="Email"]');
  const subjectInput = document.querySelector('input[placeholder="Subject"]');
  const messageInput = document.querySelector("textarea");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      subject: subjectInput.value,
      message: messageInput.value,
    };

    localStorage.setItem("formData", JSON.stringify(formData));

    alert("Form data has been saved to local storage!");

    nameInput.value = "";
    emailInput.value = "";
    subjectInput.value = "";
    messageInput.value = "";
  });

  const storedFormData = localStorage.getItem("formData");

  if (storedFormData) {
    const formData = JSON.parse(storedFormData);

    nameInput.value = formData.name;
    emailInput.value = formData.email;
    subjectInput.value = formData.subject;
    messageInput.value = formData.message;
  }
});
