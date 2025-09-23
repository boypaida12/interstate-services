import clsx from "clsx";
import Link from "next/link";

interface ContactButtonProps {
  name?: string;
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  name = "Contact Us",
  className,
}) => {
  return (
    <Link
      href="#contact-us"
      className={clsx("rounded-full bg-black text-white px-8 py-2", className)}
    >
      {name}
    </Link>
  );
};

export default ContactButton;
