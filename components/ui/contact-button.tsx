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
      href="#contact"
      className={clsx("rounded-full bg-black px-8 py-2 font-medium", className)}
    >
      {name}
    </Link>
  );
};

export default ContactButton;
