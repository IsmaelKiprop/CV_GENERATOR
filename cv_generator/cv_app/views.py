from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, 'index.html', {})  # Replace 'index.html' with your template

def generate_cv(request):
    # Your CV generation logic here
    return HttpResponse("CV generation logic goes here")
