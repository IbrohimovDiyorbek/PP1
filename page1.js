document.getElementById('showFormBtn').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'block';
    this.style.display = 'none';
});

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const avary = document.getElementById('avary').value;
    const line = document.getElementById('line').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const size = document.getElementById('size').value;
    const contry = document.getElementById('contry').value;
    const cer = document.getElementById('cer').value;
    const info = document.getElementById('info').value;

    const userInfo = `
        <p><strong>Bird Aviary:</strong> ${avary}</p>
        <p><strong>Bird name:</strong> ${name}</p>
        <p><strong>Bird Line:</strong> ${line}</p>
        <p><strong>Ring ID:</strong> ${phone}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Ring Size:</strong> ${size}</p>
        <p><strong>Contry:</strong> ${contry}</p>
        <p><strong>Certificate:</strong> ${cer}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Information:</strong> ${info}</p>
    `;

    document.getElementById('userInfo').innerHTML = userInfo;
    document.getElementById('userForm').reset();
});