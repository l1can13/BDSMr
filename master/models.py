from django.core.validators import MaxLengthValidator
from django.db import models
from multiselectfield import MultiSelectField


class Master(models.Model):
    name = models.CharField('name', max_length=50)
    portfolio = models.TextField('portfolio')
    status = models.TextField(
        'status',
        max_length=100,
        validators=[MaxLengthValidator(100)]
    )
    avatar = models.ImageField(verbose_name='avatar', upload_to='master/avatar')
    background = models.ImageField(verbose_name='background', upload_to='master/background')
    alias = models.CharField('alias', max_length=50)
    phone_number = models.CharField('phone_number', max_length=12)
    vk = models.CharField('vk', max_length=100)
    tg = models.CharField('tg', max_length=100)
    works = models.ManyToManyField('PortfolioFiles', blank=True, related_name='works')

    def __str__(self):
        return f'Имя: {self.name}'


class PortfolioFiles(models.Model):
    master = models.ForeignKey(Master, models.CASCADE)
    picture = models.ImageField(verbose_name='picture', upload_to='master/portfolio_files')

    def __str__(self):
        return f'Фото мастера: {self.master.name}'
