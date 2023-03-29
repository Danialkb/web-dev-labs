from django.http import JsonResponse
from django.shortcuts import render

from api import models


def get_categories(request, *args, **kwargs):
    categories = models.Category.objects.all()
    cats_json = [c.to_json() for c in categories]

    return JsonResponse(cats_json, safe=False)


def get_category(request, *args, **kwargs):
    category = models.Category.objects.get(id=kwargs['id'])
    category_json = category.to_json()

    return JsonResponse(category_json, safe=False)


def get_products_by_category(request, *args, **kwargs):
    category = models.Category.objects.get(id=kwargs['id'])
    products = category.products.all()

    products_json = [p.to_json() for p in products]

    return JsonResponse(products_json, safe=False)


def get_products(request, *args, **kwargs):
    products = models.Product.objects.all()
    prods_json = [p.to_json() for p in products]

    return JsonResponse(prods_json, safe=False)


def get_product(request, *args, **kwargs):
    product = models.Product.objects.get(id=kwargs['id'])
    prod_json = product.to_json()

    return JsonResponse(prod_json, safe=False)
