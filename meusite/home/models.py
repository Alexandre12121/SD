from django.db import models

# Create your models here.
class Artigos(models.Model):
    titulo = models.CharField(max_length = 1000)
    autores = models.CharField(max_length = 1000)
    instituicao = models.CharField(max_length = 1000)
    dataPublicacao = models.CharField(max_length = 1000)    
    palavraChave = models.CharField(max_length = 1000)
    resumo = models.CharField(max_length = 1000)
    abstract = models.CharField(max_length = 1000)
    direitos = models.CharField(max_length = 1000)
    doi = models.CharField(max_length = 1000)
    revista = models.CharField(max_length = 1000)

    def __str__(self):
        return self.autores