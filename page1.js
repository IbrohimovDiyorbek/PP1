document.getElementById('showFormBtn').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'block';
    this.style.display = 'none';
});

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;

    const userInfo = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Ring ID:</strong> ${phone}</p>
        <p><strong>Gender:</strong> ${gender}</p>
    `;

    document.getElementById('userInfo').innerHTML = userInfo;
    document.getElementById('userForm').reset();
});