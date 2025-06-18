from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.db.models import Q
from .models import Patient
from .serializers import PatientSerializer, PatientListSerializer 
from django.shortcuts import redirect

class PatientListCreateView(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    
    def get_serializer_class(self):
        if self.request.method == 'GET':
            return PatientListSerializer
        return PatientSerializer
    
    def get_queryset(self):
        queryset = Patient.objects.all()
        search = self.request.query_params.get('search', None)
        if search:
            queryset = queryset.filter(
                Q(first_name__icontains=search) |
                Q(last_name__icontains=search) |
                Q(patient_id__icontains=search) |
                Q(phone_number__icontains=search)
            )
        return queryset

class PatientDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    lookup_field = 'patient_id'

@api_view(['GET'])
def patient_stats(request):
    total_patients = Patient.objects.count()
    male_patients = Patient.objects.filter(gender='M').count()
    female_patients = Patient.objects.filter(gender='F').count()
    
    return Response({
        'total_patients': total_patients,
        'male_patients': male_patients,
        'female_patients': female_patients,
    }) 
    

def login_success(request):
    if request.user.role == 'doctor':
        return redirect('doctor_dashboard')
    elif request.user.role == 'nurse':
        return redirect('nurse_dashboard')
    elif request.user.role == 'admin':
        return redirect('admin_dashboard')
    elif request.user.role == 'patient':
        return redirect('patient_dashboard')
    else:
        return redirect('home')
