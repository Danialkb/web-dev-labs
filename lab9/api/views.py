from django.db.models import Max
from django.http import JsonResponse
from django.shortcuts import render
from . import models


def get_companies(request, *args, **kwargs):
    companies = models.Company.objects.all()
    companies_json = [i.to_json() for i in companies]

    return JsonResponse(companies_json, safe=False)


def get_company(request, *args, **kwargs):
    company = models.Company.objects.get(id=kwargs['id'])
    company_json = company.to_json()

    return JsonResponse(company_json, safe=False)

def get_vacancies_by_company(request, *args, **kwargs):
    vacancies = models.Vacancy.objects.filter(company_id=kwargs['id'])
    vacs_json = [i.to_json() for i in vacancies]

    return JsonResponse(vacs_json, safe=False)


def get_vacancies(request, *args, **kwargs):
    vacancies = models.Vacancy.objects.all()
    vacancies_json = [i.to_json() for i in vacancies]

    return JsonResponse(vacancies_json, safe=False)

def get_vacancy(request, *args, **kwargs):
    vacancy = models.Vacancy.objects.get(id=kwargs['id'])
    vacancy_json = vacancy.to_json()

    return JsonResponse(vacancy_json, safe=False)

def get_vacancies_top_ten(request, *args, **kwargs):
    highest_salaries = models.Vacancy.objects.annotate(max_salary=Max('salary')).order_by('-max_salary')[:10]
    vacancies_json = [i.to_json() for i in highest_salaries]

    return JsonResponse(vacancies_json, safe=False)