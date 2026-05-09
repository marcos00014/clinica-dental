import { Clock, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "../components/icons/SocialIcons";

export const contactContent = {
  label: "Contacto",
  title: "Reservá tu consulta",
  whatsappService: "reservar una consulta",
  mapTitle: "Ubicación Sonrisa Clara",
  mapUrl: "https://www.google.com/maps?q=Concordia%20Entre%20R%C3%ADos&output=embed",
};

export const contactInfo = [
  {
    text: "San Martín 1234, Concordia, Entre Ríos",
    icon: MapPin,
  },
  {
    text: "Lunes a viernes 8:00 a 20:00 · Sábados 9:00 a 13:00",
    icon: Clock,
  },
  {
    text: "WhatsApp: 345 4166622",
    icon: Phone,
  },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "#",
    icon: FacebookIcon,
  },
];
