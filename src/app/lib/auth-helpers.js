export async function logUserLogin(email, password, isOauth = false) {
  try {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        isOauth,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.details || "Failed to log user activity");
    }

    return await response.json();
  } catch (error) {
    console.error("Error logging user activity:", error);
    throw error;
  }
}
