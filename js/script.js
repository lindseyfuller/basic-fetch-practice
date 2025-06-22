async function fetchAPI(){
    try {
        const response = await fetch('https://raw.githubusercontent.com/dan-collins-dev/dummy-data-fetching-repo/refs/heads/main/data/users.json');
        if (!response.ok) {
            throw new Error( 'HTTP error! status:${response.status}');
        }
        const data = await response.json();
        console.log(data);
        return data;        
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

const userContainer = document.getElementById("user-container");
const getUsers = document.getElementById("get-users");
const underTen = document.getElementById("get-experience");
const reset = document.getElementById("reset-button");

getUsers.addEventListener("click", () => {
    fetchAPI().then(data => {
        userContainer.innerHTML = "";
        data.forEach(user => {
            const ul = document.createElement('ul');
            ul.classList.add('user-list');
            const li1 = document.createElement('li');
            const li2 = document.createElement('li');
            const li3 = document.createElement('li');
            const li4 = document.createElement('li');
            li1.textContent = `Name: ${user.firstName} ${user.lastName}`;
            li2.textContent = `Email: ${user.email}`;
            li3.textContent = `Company Name: ${user.companyName}`;
            li4.textContent = `Years Employed: ${user.yearsEmployed}`;
            userContainer.appendChild(ul);
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
        });
    });
});

underTen.addEventListener("click", () => {
    fetchAPI().then(data => {
        userContainer.innerHTML = "";
        const filteredUsers = data.filter(user => user.yearsEmployed < 10);
        filteredUsers.forEach(user => {
            const ul = document.createElement('ul');
            ul.classList.add('user-list');
            const li1 = document.createElement('li');
            const li2 = document.createElement('li');
            const li3 = document.createElement('li');
            const li4 = document.createElement('li');
            li1.textContent = `Name: ${user.firstName} ${user.lastName}`;
            li2.textContent = `Email: ${user.email}`;
            li3.textContent = `Company Name: ${user.companyName}`;
            li4.textContent = `Years Employed: ${user.yearsEmployed}`;
            userContainer.appendChild(ul);
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
        });
    });
});

reset.addEventListener("click", () => {
    userContainer.innerHTML = "";
});