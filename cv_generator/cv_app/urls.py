from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # Replace 'index' with your view
    # Add other URL patterns for your views
    path('generate_cv/', views.generate_cv, name='generate_cv'),
]




