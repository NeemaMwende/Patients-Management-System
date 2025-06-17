from django.urls import path
from . import views

urlpatterns = [
    # Patient-related endpoints
    path('patients/', views.PatientListCreateView.as_view(), name='patient-list-create'),
    path('patients/<str:patient_id>/', views.PatientDetailView.as_view(), name='patient-detail'),
    path('stats/', views.patient_stats, name='patient-stats'),

    # Authentication endpoints 
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('profile/', views.UserProfileView.as_view(), name='profile'),
]