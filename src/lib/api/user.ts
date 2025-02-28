import { IUSer } from "@/types/user/user";

export const registerUser = async (body: IUSer) => {
  const res = await fetch("https://readjourney.b.goit.study/api/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    console.error(res);
  }
  return await res.json();
};
