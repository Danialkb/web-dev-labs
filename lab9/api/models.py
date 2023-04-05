from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=40)
    description = models.TextField(default="")
    city = models.CharField(max_length=100)
    address = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.name} {self.city}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address,
        }


class Vacancy(models.Model):
    company = models.ForeignKey(to=Company, on_delete=models.RESTRICT)
    name = models.CharField(max_length=150)
    description = models.TextField(default="")
    salary = models.FloatField(default=0.0)

    def to_json(self):
        return {
            'id': self.id,
            'company': self.company.name,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
        }
