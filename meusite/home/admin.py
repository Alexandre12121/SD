from django.contrib import admin
from home.models import Artigos


# Register your models here.
class Artigoss(admin.ModelAdmin):
    list_display = ('id', 'titulo', 'autores', 'instituicao', 'dataPublicacao',
    'revista', 'doi', 'palavraChave', 'resumo',  'abstract', 'direitos', )
    search_fields =  ('autores',)

admin.site.register(Artigos, Artigoss)

