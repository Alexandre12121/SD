Criar um ambiente virtual
python3 -m venv serv


Ativar ambiente virtual
source serv/bin/activate


instalar django
sudo pip3 install django


criar um projeto django
django-admin startproject meusite


migrar o projeto
python3 manage.py migrate


rodar o servidor
python3 manage.py runserver


Criar aplicação
python3 manage.py startapp home
