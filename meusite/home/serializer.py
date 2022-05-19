from rest_framework import serializers
from home.models import Artigos

class ArtigosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artigos
        fields = ['id', 'titulo', 'autores', 'instituicao', 'datapubli','datacria', 'palachave', 'resumo', 'resume', 'referencias', 'direitos'] 
