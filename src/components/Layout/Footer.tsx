const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="w-full h-[80px] flex items-center justify-center text-primary bg-secondary-50 mt-4 md:mt-6">
        <p className="text-sm">All rights reserved to: The Beautiful Experience Store | {year}</p>
      </footer>
    </>
  );
};

export default Footer;
