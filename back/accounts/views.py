from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .serializers import UserSerializer, ProfileSerializer

# Create your views here.
@api_view(['POST'])
def signup(request):
  serializer = UserSerializer(data=request.data)
  if serializer.is_valid(raise_exception=True):
    user = serializer.save()
    user.set_password(request.data.get('password'))
    user.save()
    return Response(serializer.data)


@api_view(['GET'])
def profile(request, username):
  User = get_user_model()
  user = get_object_or_404(User, username=username)
  serializer = ProfileSerializer(user)
  return Response(serializer.data)