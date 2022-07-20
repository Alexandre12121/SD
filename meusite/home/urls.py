from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from django.contrib.auth import views as auth_views

from . import views


urlpatterns = [
   
    path('',views.index, name='index.html'),
    path('index1/',views.index, name='index1.html'),
    path('adicionar.html', views.adicionar, name='adicionar.html'),
    path('index.html', views.artigos, name = 'artigos.html'),   

    path('cadastro/', views.cadastro, name='cadastro'),
    path('login/', auth_views.LoginView.as_view(redirect_authenticated_user=True), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)