import RoundedButtonLink from "@/components/ui/header/rounded-button-link";
import { IoSearch as SearchIcon } from "react-icons/io5";

const SearchButton = () => {
  return <RoundedButtonLink url="/search" Icon={SearchIcon} />;
};

export default SearchButton;
