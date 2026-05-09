import { BadgeCheck, CalendarCheck, MessageCircle } from "lucide-react";

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
