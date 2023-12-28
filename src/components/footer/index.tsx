import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            nam amet dolores reprehenderit. Saepe sed, facere modi assumenda
            adipisci nobis repellendus quod esse dolorum facilis odio
            asperiores. Quos, delectus fugit.
          </p>
          <p>&copy; Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </p>

          <p>(111) 123-4567</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
