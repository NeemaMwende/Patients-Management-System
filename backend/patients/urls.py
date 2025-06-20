from django.urls import path
from . import views

urlpatterns = [
    path('patients/', views.PatientListCreateView.as_view(), name='patient-list-create'),
    path('patients/<str:patient_id>/', views.PatientDetailView.as_view(), name='patient-detail'),
    path('stats/', views.patient_stats, name='patient-stats'),
]