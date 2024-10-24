axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    const userList = document.getElementById("user-list");
    response.data.forEach((user) => {
      const li = document.createElement("li");
      li.classList.add(
        "p-4",
        "rounded-lg",
        "shadow-md",
        "transition",
        "hover:bg-gray-700",
        "text-left",
        "mx-auto"
      );
      li.innerHTML = `
            <strong class="text-lg">${user.name}</strong> <br>
            <span class="text-gray-400">Username: ${user.username}</span> <br>
            <span class="text-gray-400">Email: ${user.email}</span> <br>
            <span class="text-gray-400">Phone: ${user.phone}</span>
        `;
      userList.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Could not fetch users:", error);
  });
