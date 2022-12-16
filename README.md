# Cadastro de carro

### Requisitos funcionais

- Deve ser possível cadastrar um novo carro.
- Deve ser possível listar todas as categorias

### Regra de negócio

- Não deve ser possível cadastrar um carro com uma placa já existente.
- Não deve ser possível alterar a placa de um carro já cadastrado.
- O carro deve ser cadastrado com disponibilidade por padrão.
- O usuario responsavel pelo cadastro deve ser um usuário administrador.

# Listagem de carros

### Requisitos funcionais

- Deve ser possível listar os carros disponiveis
- Deve ser possível listar todos os carros pelo nome da marca
- Deve ser possível listar todos os carros pelo nome do carro

### Regra de negócio

- Não se faz necessario estar logado no sistema para fazer leitura da lista

# Cadastro de Especificação no carro

### Requisitos funcionais

- Deve ser possível cadastrar uma especificação para um carro
- Deve ser possível listar todas as especificações
- Deve ser possível listar todos os carros

### Regra de negócio

- Não deve ser possível uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o carro.
- O usuario responsavel pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

### Requisitos funcionais

- Deve ser possível cadastrar a imagem do carro
- Deve ser possível listar todos os carros (disponiveis/indisponiveis)

### Requisitos não funcionais

- Utilizar o multer para upload dos serviços

### Regra de negócio

- O usuario deve poder cadastrar mais de uma imagem para o mesmo carro
- O usuario responsavel pelo cadastro deve ser um usuario administrador

# Aluguel

### Requisitos funcionais

- Deve ser possível cadastrar um aluguel

### Regra de negócio

- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
