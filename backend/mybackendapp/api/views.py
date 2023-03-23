from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.http.response import JsonResponse # json response
from rest_framework.parsers import JSONParser
from rest_framework import status

from .information import  Persons

@api_view(['GET', 'POST'])
def getData(request):
    if request.method == 'GET':

        data = Persons
        return Response(data)
    
    elif request.method == 'POST':
        person_data = JSONParser().parse(request)
        print(person_data)
        return Response({'hello': 'worls'})
