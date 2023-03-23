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
        return Response(data, status=status.HTTP_200_OK)
    
    elif request.method == 'POST':
        person_data = JSONParser().parse(request) # here we get the object and we convert it into json
        # print(person_data) You can print it out here, to see what exactly you find
        Persons.append(person_data) # add the data into the array of objects
        return Response(Persons, status=status.HTTP_202_ACCEPTED) # send back the new information to the frontend
