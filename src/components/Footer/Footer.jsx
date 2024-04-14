

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>© {currentYear} Michel Garcia</p>
    </footer>
  );
};

export default Footer;
