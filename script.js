const contactsArray = [
    {
        name: "Ramla Eman",
        gmail: "ramla.eman.ra@gmail.com",
    },
    {
        name: "Whisper",
        gmail: "whisperpie@gmail.com",
    },
    {
        name: "Razy Kan",
        gmail: "razykan1981@gmail.com",
    },
    {
        name: "Abdulbasit",
        gmail: "kabdulbasit258@gmail.com",
    },
    {
        name: "Sadaf",
        gmail: "sadafshahab155@yahoo.com",
    }
];

function renderContacts(contacts) {
    const contactList = document.getElementById("contact-List");
    contactList.innerHTML = "";
    for (const contact of contacts) {
        const contactDiv = document.createElement("div");
        contactDiv.className = "contact";
        contactDiv.innerHTML = `
      <h3>${contact.name}</h3>
      <p>${contact.gmail}</p>
      `;
        contactList.appendChild(contactDiv);
    }
}
function filterContacts() {
    const filterInput = document.getElementById("filter-input").value.toLowerCase();
    const filterContacts = contactsArray.filter((contact) =>
        contact.name.toLowerCase().includes(filterInput)
    );
    renderContacts(filterContacts);
}
renderContacts(contactsArray);
document.getElementById('filter-button').addEventListener('click', filterContacts);