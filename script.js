document.getElementById('fetchUser').addEventListener('click', fetchUserData);

function fetchUserData() {
    const url = 'https://randomuser.me/api/?results=10'; // Fetch 10 users
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            displayUsers(data.results);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

function displayUsers(users) {
    const userContainer = document.getElementById('userContainer');
    userContainer.innerHTML = '';

    users.forEach((user) => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-info');

        userDiv.innerHTML = `
      <img src="${user.picture.large}" alt="User Picture">
      <p><strong>City:</strong> ${user.location.city}</p>
      <p><strong>Country:</strong> ${user.location.country}</p>
      <p><strong>Postcode:</strong> ${user.location.postcode}</p>
      <p><strong>Email:</strong> ${user.email}</p>
    `;

        userContainer.appendChild(userDiv);
    });
}
