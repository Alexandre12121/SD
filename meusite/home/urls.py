from django.urls import path

from . import views

urlpatterns = [
    path('',views.index, name='index.html'),
    path('adicionar.html', views.adicionar, name='adicionar.html'),
    path('index.html', views.artigos, name = 'artigos.html')
]