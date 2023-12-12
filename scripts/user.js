
  

  // Função para enviar um novo usuário ao servidor
  const postNewUser = async () => {
    // Coletar dados do formulário

    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dataNascimento = document.getElementById('datanascimento').value;

    const novoUsuario = {
      nome: nome,
      email: email,
      senha: senha,
      dataNascimento: dataNascimento,
    };

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoUsuario),
      });

      if (response.ok) {
        console.log('Novo usuário criado com sucesso!');
        
      } else {
        console.error('Erro ao criar o usuário:', response.status);
      } 
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  // Atribuir a função ao evento de envio do formulário
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('editForm').addEventListener('submit', function (event) {
      event.preventDefault(); 
      postNewUser();
    });
  });

