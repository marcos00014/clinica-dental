function BenefitCard({ benefit }) {
  const Icon = benefit.icon;

  return (
    <div className="benefit">
      <Icon size={30} strokeWidth={1.8} />
      <h3>{benefit.title}</h3>
      <p>{benefit.text}</p>
    </div>
  );
}

export default BenefitCard;
