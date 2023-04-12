from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from . import models, serializers


class CompanyViewSet(ModelViewSet):
    queryset = models.Company.objects.all()
    serializer_class = serializers.CompanySerializer

    @action(detail=True, methods=['GET'])
    def vacancies(self, request, *args, **kwargs):
        company = self.get_object()
        vacancies = company.vacancy_set.all()
        serializer = serializers.VacancySerializer(vacancies, many=True)
        return Response(serializer.data)




class VacancyViewSet(ModelViewSet):
    queryset = models.Vacancy.objects.all()
    serializer_class = serializers.VacancySerializer

    @action(detail=False, methods=['GET'])
    def top_ten(self, request):
        vacancies = models.Vacancy.objects.order_by('-salary')[:10]
        serializer = serializers.VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
