from rest_framework import serializers
from .models import Patient

class PatientSerializer(serializers.ModelSerializer):
    full_name = serializers.ReadOnlyField()
    
    class Meta:
        model = Patient
        fields = [
            'id', 'first_name', 'last_name', 'full_name', 'email', 
            'phone_number', 'date_of_birth', 'gender', 'address', 
            'medical_history', 'emergency_contact_name', 
            'emergency_contact_phone', 'created_at', 'updated_at'
        ]
        read_only_fields = ['created_at', 'updated_at']