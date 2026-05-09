function ContactInfoItem({ item }) {
  const Icon = item.icon;

  return (
    <p>
      <Icon size={18} /> {item.text}
    </p>
  );
}

export default ContactInfoItem;
