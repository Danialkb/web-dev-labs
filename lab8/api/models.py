from django.db import models


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

    def __str__(self):
        return f'{self.id} {self.name}'


class Product(models.Model):
    category = models.ForeignKey(to=Category, on_delete=models.CASCADE, related_name='products')
    name = models.CharField(max_length=80)
    price = models.FloatField()
    description = models.TextField()
    amount = models.IntegerField(null=False)
    is_active = models.BooleanField()

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'amount': self.amount,
            'is_active': self.is_active
        }

    def __str__(self):
        return f'{self.id} {self.name} {self.description} {self.price}'

