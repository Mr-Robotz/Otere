import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src="/images/logo.png" alt="Otere Logo" width={120} height={52} />
    </div>
  );
};
export default Logo;
