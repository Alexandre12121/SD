# Projeto Repositorio de Artigos Científicos

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

## Autores 🧑‍💼🧑‍💼🧑‍💼

| [<img src="https://avatars.githubusercontent.com/u/75952650?v=4" width=115><br><sub>Alexandre Santos Ferreira</sub>](https://github.com/Alexandre12121) | [<img src="https://avatars.githubusercontent.com/u/53832637?v=4" width=115><br><sub>Luiz Henrique Lima</sub>](https://github.com/luizhenrlimaa) | [<img src="https://avatars.githubusercontent.com/u/69551648?v=4" width=115><br><sub>Vinícius Soares de Paula Souza</sub>](https://github.com/Vsspaulasouza) |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: |

## Descrição do projeto 📚

<p align="justify">
O projeto é realizado na disciplina de Sistemas Distribuídos do curso Sistemas de Informação da UFVJM. Sua finalidade é apresentar
o funcionamento de um sistema para um repositório de artigos científicos, utilizando como base o Django, HTML, CSS e JavaScript.
</p>

## Tecnologias 🛠

As seguintes ferramentas foram usadas na construção do projeto:

- [Python](https://www.python.org/)
- [Django](https://www.djangoproject.com/)
- [HTML](https://www.devmedia.com.br/html-basico-codigos-html/16596)
- [CSS](https://www.w3schools.com/css/)
- [JavaScript](https://www.javascript.com/)

## Como rodar a aplicação :arrow_forward:

Para rodar o sistema, é necessario entrar na basta base SD e rodar o seguinte comando:

```
$ source serv/bin/activate
```

Após ativar o ambiente virtual, é necessario entrar na pasta meusite, com o comando:

```
$ cd meusite
```

Agora para rodar o servidor é necessario rodar o comando:

```
$ python manage.py runserver
```

## Criação do projeto 📜

<p align="justify">
A seguir está os comandos utilizados para criação  do projeto, NÃO É NECESSARIO REALIZAR NOVAMENTE PARA O FUNCIONAMENTO DO PROJETO.

Primeirante foi criado uma basta base, chamada SD com o comando:

```
$ mkdir SD
```

Após a criação da pasta, é necessario criar o ambiente virtual, com o comando:

```
$ python -m venv serv
```

Para ativar esse ambiente:

```
$ source serv/bin/activate
```

Depois foi instalado o Django, com o comando:

```
python -m pip install django
```

Após a instalação do Django, foi criado o projeto:

```
$ django-admin startproject meusite
```

Com o projeto criado, é necessario realizar as migrações, com o comando:

```
$ python manage.py migrate
```

Após essa migração, foi criado um app intitulado home, com o comando:

```
$ python manage.py startapp home
```

</p>
