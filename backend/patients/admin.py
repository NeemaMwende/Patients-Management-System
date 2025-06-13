from django.contrib import admin
from .models import Patient

@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = ['patient_id', 'first_name', 'last_name', 'date_of_birth', 'gender', 'phone_number', 'created_at']
    list_filter = ['gender', 'blood_type', 'created_at']
    search_fields = ['patient_id', 'first_name', 'last_name', 'phone_number']
    readonly_fields = ['patient_id', 'created_at', 'updated_at']
    ordering = ['-created_at']