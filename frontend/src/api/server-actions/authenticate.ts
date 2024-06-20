"use server";

export async function authenticate(_currentState: unknown, formData: FormData) {
  console.log("formData", formData);

  try {
    const response = await fetch("http://localhost:3001/api/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    const data = await response.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log("error", error);
    if (error) {
      return "error";
    }
  }
}
