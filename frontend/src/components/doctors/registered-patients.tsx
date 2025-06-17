"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { patientApi, Patient } from "@/lib/api";
import { differenceInYears } from "date-fns";
import { User2, Phone, Mail, Activity } from "lucide-react";

export default function RegisteredPatients() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await patientApi.getAllPatients();
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching patients", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const calculateAge = (dob: string | Date): number | null => {
    try {
      return differenceInYears(new Date(), new Date(dob));
    } catch {
      return null;
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-36 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Registered Patients ({patients.length})</h1>
      {patients.length === 0 ? (
        <p className="text-gray-600">No patients registered yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {patients.map((patient) => (
            <Card key={patient.patient_id} className="p-4 space-y-2 shadow-sm">
              <div className="flex items-center space-x-2">
                <User2 className="text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-800">
                  {patient.first_name} {patient.last_name}
                </h2>
              </div>
              <p className="text-sm text-gray-600">
                Age: {calculateAge(patient.date_of_birth)} | Gender: {patient.gender}
              </p>
              <p className="text-sm flex items-center text-gray-600 gap-2">
                <Phone className="w-4 h-4" /> {patient.phone_number}
              </p>
              {patient.email && (
                <p className="text-sm flex items-center text-gray-600 gap-2">
                  <Mail className="w-4 h-4" /> {patient.email}
                </p>
              )}
              <div className="flex justify-between items-center pt-2">
                <Badge variant="outline" className="bg-blue-100 text-blue-800">
                  Blood: {patient.blood_type || "N/A"}
                </Badge>
                <Badge
                  className={
                    patient.status === "finished"
                      ? "bg-green-100 text-green-700"
                      : patient.status === "active"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }
                >
                  {patient.status?.charAt(0).toUpperCase() + patient.status?.slice(1) || "Unknown"}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
