from rest_framework import serialziers
from base.models import Item

class ItemSerializer(serialziers.ModelSerializer):
    class Meta: 
        model = Item
        fields = '__all__'