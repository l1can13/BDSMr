from django.urls import path
from . import views


urlpatterns = [
    path('<slug:slug>', views.MasterDetailView.as_view())
]
