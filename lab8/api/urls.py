from django.urls import path

from api import views

urlpatterns = [
    path(r'products/', views.get_products),
    path(r'categories/', views.get_categories),
    path(r'products/<int:id>/', views.get_product),
    path(r'categories/<int:id>/', views.get_category),
    path(r'categories/<int:id>/products', views.get_products_by_category),
]