from django.shortcuts import render, redirect
from rest_framework import viewsets
from home.models import Artigos
from home.serializer import ArtigosSerializer
from django.contrib.auth import authenticate, logout,login
from django.contrib.auth.decorators import login_required, permission_required
from django.contrib import messages
from django.contrib.auth.models import User, Permission
from django.shortcuts import get_object_or_404
from django.core.mail import send_mail

# Create your views here.
@login_required(login_url='login/')
def index(request):
    if request.user.is_superuser:
       return render(request,"index.html")
    else:
        return render(request,"index1.html")


@login_required(login_url='login/')
def adicionar(request):    
    return render(request, 'adicionar.html')


@login_required(login_url='login/')
def artigos(request):
    if request.user.is_superuser:
       return render(request,"index.html")
    else:
        return render(request,"index1.html")


def cadastro(request):
    if request.method == "GET":
        return render(request, 'cadastro.html')
    else:
        username = request.POST.get('username')
        email = request.POST.get('email')
        senha = request.POST.get('senha')
        user = User.objects.filter(username=username).first()      
        usuario_aux = User.objects.filter(email=email).first()
        if usuario_aux:
            messages.info(request, 'Já existe um usuario com o mesmo e-mail!!!')
            return redirect('/cadastro')
        if user:            
            messages.info(request, 'Ja existe um usuario com esse Login!!')
            return redirect('/cadastro')
        else:                        
            user = User.objects.create_user(username=username, email=email, password=senha)
            messages.info(request, 'Usuario cadastrado com sucesso - Email de confirmação no terminal!!')
            send_mail("Confirmação de cadastro", "Sua conta foi criada com sucesso",'artigos@gmail.com',['to@example.com'],fail_silently=False)
            return redirect('/login')  
            
#Create 
class ArtigosViewSets(viewsets.ModelViewSet):
    queryset = Artigos.objects.all() 
    serializer_class = ArtigosSerializer   