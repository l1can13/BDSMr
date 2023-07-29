from django.db import models


class Master(models.Model):
    name = models.CharField('name', max_length=50)
    portfolio = models.TextField('portfolio')
    status = models.CharField('status', max_length=100)
    avatar = models.CharField('avatar', max_length=50)
    alias = models.CharField('alias', max_length=50)
    phone_number = models.CharField('phone_number', max_length=12)
    vk = models.CharField('vk', max_length=100)
    tg = models.CharField('tg', max_length=100)

    def __str__(self):
        return f'Имя: {self.name}'


class PortfolioFiles(models.Model):
    master = models.ForeignKey(Master, models.CASCADE)
    filename = models.CharField('filename', max_length=100)
