"use client";

import { useState } from "react";
import { DoctorLayout } from "../../components/layouts/DoctorLayout";
import { DoctorDashboard } from "../../components/doctors/doctor-dashboard";
import { DoctorList } from "../../components/doctors/doctor-list";
import { DoctorForm } from "../../components/doctors/doctor-form";
import { Schedules } from "@/components/doctors/doctor-schedule";
import DoctorPatients from "../../components/doctors/doctor-patients";

export default function DoctorsPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <DoctorLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === "dashboard" && <DoctorDashboard />}
      {activeTab === "list" && <DoctorList />}
      {activeTab === "form" && <DoctorForm />}
      {activeTab === "schedules" && <Schedules />}
      {activeTab === "patients" && <DoctorPatients />}
    </DoctorLayout>
  );
}
