const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p className="copyright">
              ©Copyright:{' '}
              <a
                href="https://rafal-portfolio.000webhostapp.com"
                target="_blank"
              >
                Rafał Ziółkowski
              </a>{' '}
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
