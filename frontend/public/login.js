const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");
const url = "http://localhost:3001";

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const loginUrl = `${url}/api/users/login`;
  try {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      sessionStorage.setItem("token", data.token);

      const succEelemnt = document.createElement("p");
      succEelemnt.textContent = "login successful";
      document.body.appendChild(succEelemnt);
    } else {
      console.log("login fail", await response.text());
      const succEelemnt = document.createElement("p");
      succEelemnt.textContent = "incorrect account or password";
      document.body.appendChild(succEelemnt);
    }
  } catch (error) {
    throw new Error(`somthing went wrong ${error}`);
  }
});
