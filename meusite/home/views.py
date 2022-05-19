from django.shortcuts import render

from rest_framework import viewsets
from home.models import Artigos
from home.serializer import ArtigosSerializer

# Create your views here.
def index(request):
    return render(request, 'index.html')

def adicionar(request):
    
    return render(request, 'adicionar.html')

def artigos(request):
    return render(request,"index.html")


#Create 
class ArtigosViewSets(viewsets.ModelViewSet):
    queryset = Artigos.objects.all() 
    serializer_class = ArtigosSerializer   