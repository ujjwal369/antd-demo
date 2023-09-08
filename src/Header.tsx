import { FC } from "react";

interface HeaderProps {
  name: string;
  isMarried?: boolean;
}
const Header: FC<HeaderProps> = ({ name, isMarried }) => {
  return (
    <>
      <h4>Welcome, {name}!</h4>
      <p>Marital status: {isMarried ? "Married" : "Not Provided"}</p>
    </>
  );
};
export default Header;
