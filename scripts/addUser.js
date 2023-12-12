document.addEventListener('DOMContentLoaded', function () {
  const registerButton = document.querySelector('.register');

  registerButton.addEventListener('click', function () {
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const datanascimento = document.getElementById('datanascimento').value;

    const data = {
      nome,
      email,
      senha,
      datanascimento
    };

    const apiUrl = 'http://localhost:3000/users';

    axios.post(apiUrl, data)
      .then(response => {
        console.log('Usuário registrado com sucesso:', response.data);
      })
      .catch(error => {
        console.error('Erro ao registrar usuário:', error);
      });
  });
});
