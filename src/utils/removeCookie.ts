import Cookies from "universal-cookie";

export const removeCookie = () => {
  const cookies = new Cookies();

  cookies.remove("user_id", { path: "/" });
};
