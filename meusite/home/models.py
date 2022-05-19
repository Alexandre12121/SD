from django.db import models

# Create your models here.
class Artigos(models.Model):
    titulo = models.CharField(max_length = 1000)
    autores = models.CharField(max_length = 1000)
    instituicao = models.CharField(max_length = 1000)
    datapubli = models.CharField(max_length = 1000)
    datacria = models.CharField(max_length = 1000)
    palachave = models.CharField(max_length = 1000)
    resumo = models.CharField(max_length = 1000)
    resume = models.CharField(max_length = 1000)
    referencias = models.CharField(max_length = 1000)
    direitos = models.CharField(max_length = 1000)

    def __str__(self):
        return self.autores