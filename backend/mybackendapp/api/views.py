from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.http.response import JsonResponse # json response
from rest_framework.parsers import JSONParser
from rest_framework import status

@api_view(['GET', 'POST'])
def getData(request):
    if request.method == 'GET':

        person = [{'name': 'Dan', 'age': 20}, {'name': 'Kim', 'age': 33}, {'name': 'Dan', 'age': 20}, {'name': 'Paul', 'age': 100}]
        return Response(person)
    
    elif request.method == 'POST':
        person_data = JSONParser().parse(request)
        print(person_data)
        return Response({'hello': 'worls'})
