const SERVER = "http://127.0.0.1:8000/";

// Function to display user data
export const displayUserData = (userDataArray) => {
    console.log('displayUserData called');
    const userDataDiv = document.getElementById('user-data');
    userDataDiv.innerHTML = '';

    if (Array.isArray(userDataArray) && userDataArray.length > 0) {
        userDataArray.forEach(userData => {
            if (userData && userData.email && userData.sName) {
                console.log('Rendering user:', userData); // Debugging line
                userDataDiv.innerHTML += `
                    <div class="col-md-4 mb-4">
                        <div class="card" style="width: 18rem;">
                            <img src="${SERVER + userData.image}" class="card-img-top" alt="${userData.sName}" style="height: 180px; object-fit: cover;">
                            <div class="card-body">
                                <h5 class="card-title">${userData.sName}</h5>
                                <p class="card-text">Email: ${userData.email}</p>
                                <p class="card-text">Age: ${userData.sAge}</p>
                                <p class="card-text">Address: ${userData.address}</p>
                                <button class="btn btn-primary btn-update" data-id="${userData.id}">Update</button>
                                <button class="btn btn-danger btn-delete" data-id="${userData.id}">Delete</button>
                            </div>
                        </div>
                    </div>
                `;
            }
        });
    } else {
        userDataDiv.innerHTML = '<p>No user data available.</p>';
    }
};

// Theme switcher functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('themeSwitcher');
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            document.querySelectorAll('h1, h3, p, .btn').forEach(el => {
                el.classList.toggle('dark-mode-text');
            });
        });
    }
});
