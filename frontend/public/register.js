const registerForm = document.getElementById("register");

const url = "http://localhost:3001";

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const register = `${url}/api/users/register`;
  try {
    const response = await fetch(register, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      const data = await response.json();

      const succEelemnt = document.createElement("p");
      succEelemnt.textContent = `create account succ ur name and email is ${data.name} , ${data.email}`;

      document.body.appendChild(succEelemnt);
    } else {
      console.log("login fail", await response.text());
      const succEelemnt = document.createElement("p");
      succEelemnt.textContent = "enter a unqiue email";
      document.body.appendChild(succEelemnt);
    }
  } catch (error) {
    throw new Error("somthing went wrong");
  }
});
