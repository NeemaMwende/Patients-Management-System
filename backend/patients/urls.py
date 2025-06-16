from django.urls import path
from . import views

urlpatterns = [
    # Patient-related endpoints
    path('patients/', views.PatientListCreateView.as_view(), name='patient-list-create'),
    path('patients/<str:patient_id>/', views.PatientDetailView.as_view(), name='patient-detail'),
    path('stats/', views.patient_stats, name='patient-stats'),

    # Authentication endpoints using DRF APIViews
    path('api/login/', views.LoginView.as_view(), name='login'),
    path('api/logout/', views.LogoutView.as_view(), name='logout'),
    path('api/register/', views.RegisterView.as_view(), name='register'),
    path('api/profile/', views.UserProfileView.as_view(), name='profile'),
]
