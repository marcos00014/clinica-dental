export const whatsappMessage = (service) => {
  const baseMessage = `Hola, me gustaría consultar sobre ${service} en Sonrisa Clara Odontología.`;
  return `https://wa.me/543454166622?text=${encodeURIComponent(baseMessage)}`;
};
