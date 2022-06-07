from rest_framework import serializers
from home.models import Artigos

class ArtigosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artigos
        fields = ['id', 'titulo', 'autores', 'instituicao', 'dataPublicacao', 'palavraChave', 'resumo', 'abstract', 'direitos', 'doi', 'revista'] 
