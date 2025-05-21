const POCKETHOST_URL = "https://zenith.pockethost.io/api/collections";

export async function logUserActivity(email, password, isOauth = false) {
  try {
    const response = await fetch(`${POCKETHOST_URL}/logs/records`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        description: isOauth ? "used google to login" : "Normal log in",
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to log activity: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error logging user activity:", error);
    throw error;
  }
}
