import { BadgeCheck, CalendarCheck, MessageCircle } from "lucide-react";
import perfilDentista from "../assets/perfildentista.webp";
import perfilDentista2 from "../assets/perfildentista2.jpg";
import perfilDentista3 from "../assets/perfildentista3.webp";

export const aboutContent = {
  label: "Sobre nosotros",
  title: "Una clínica pensada para que te sientas cómodo",
  text: "En Sonrisa Clara combinamos tecnología, criterio profesional y atención humana para que cada paciente entienda su diagnóstico y avance con tranquilidad.",
};

export const aboutBenefits = [
  {
    title: "Atención personalizada",
    text: "Cada tratamiento se planifica según tu caso y tus objetivos.",
    icon: CalendarCheck,
  },
  {
    title: "Diagnóstico claro",
    text: "Te explicamos opciones, tiempos y pasos antes de comenzar.",
    icon: BadgeCheck,
  },
  {
    title: "Comunicación simple",
    text: "Consultas rápidas y turnos directos por WhatsApp.",
    icon: MessageCircle,
  },
];

export const dentalTeam = [
  {
    name: "Dra. Valentina Ríos",
    role: "Odontóloga estética",
    image: perfilDentista,
  },
  {
    name: "Dr. Martín Costa",
    role: "Especialista en rehabilitación oral",
    image: perfilDentista3,
  },
  {
    name: "Dra. Camila Torres",
    role: "Ortodoncia y prevención",
    image: perfilDentista2,
  },
];
