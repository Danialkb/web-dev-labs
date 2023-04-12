from django.db import models


from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=40)
    description = models.TextField(default="")
    city = models.CharField(max_length=100)
    address = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.name} {self.city}'


class Vacancy(models.Model):
    company = models.ForeignKey(to=Company, on_delete=models.RESTRICT)
    name = models.CharField(max_length=150)
    description = models.TextField(default="")
    salary = models.FloatField(default=0.0)

    def __str__(self):
        return f'{self.name} {self.description} {self.salary}'
