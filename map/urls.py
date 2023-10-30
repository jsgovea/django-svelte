from django.urls import path
from map import views


app_name = '_app'

urlpatterns = [
    path('map/', views.Index.as_view(), name='map'),
]
