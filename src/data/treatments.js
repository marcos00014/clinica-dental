import { Brush, Siren, Smile, Sparkles } from "lucide-react";
import DentalTooth from "../components/icons/DentalTooth";

export const treatments = [
  {
    title: "Ortodoncia",
    desc: "Alineación dental moderna para mejorar estética, mordida y salud bucal.",
    customIcon: "brackets",
  },
  {
    title: "Implantes dentales",
    desc: "Soluciones firmes, estéticas y duraderas para recuperar piezas dentales.",
    icon: DentalTooth,
  },
  {
    title: "Blanqueamiento",
    desc: "Tratamientos seguros para recuperar luminosidad y confianza al sonreír.",
    icon: Sparkles,
  },
  {
    title: "Limpieza dental",
    desc: "Prevención profesional para mantener encías sanas y dientes protegidos.",
    icon: Brush,
  },
  {
    title: "Estética dental",
    desc: "Diseño de sonrisa, armonía dental y mejoras estéticas personalizadas.",
    icon: Smile,
  },
  {
    title: "Urgencias odontológicas",
    desc: "Atención rápida ante dolor, molestias o emergencias dentales.",
    icon: Siren,
  },
];
