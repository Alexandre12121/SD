from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def adicionar(request):
    return render(request, 'adicionar.html')

def artigos(request):
    return render(request,"index.html")