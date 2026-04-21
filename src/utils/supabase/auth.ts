type SupabaseAuthErrorLike = {
  code?: string | null;
  message: string;
  status?: number | null;
};

export const normalizeEmail = (email: string) => email.trim().toLowerCase();

const isBackendIssueCode = (code: string) =>
  code === "unexpected_failure" || code === "internal_server_error";

export const isSupabaseBackendIssue = (error: SupabaseAuthErrorLike) => {
  const normalizedCode = error.code?.toLowerCase() ?? "";
  const normalizedMessage = error.message.toLowerCase();

  return (
    isBackendIssueCode(normalizedCode) ||
    normalizedMessage.includes("database error querying schema") ||
    normalizedMessage.includes("internal server error") ||
    normalizedMessage.includes("unexpected failure")
  );
};

export const getReadableAuthErrorMessage = (
  error: SupabaseAuthErrorLike,
) => {
  const normalizedCode = error.code?.toLowerCase() ?? "";
  const normalizedMessage = error.message.toLowerCase();

  if (
    normalizedCode === "invalid_credentials" ||
    normalizedMessage.includes("invalid login credentials")
  ) {
    return "Email or password is incorrect.";
  }

  if (
    normalizedCode === "email_not_confirmed" ||
    normalizedMessage.includes("email not confirmed")
  ) {
    return "Please confirm your email before logging in.";
  }

  if (normalizedMessage.includes("invalid email")) {
    return "Please enter a valid email address.";
  }

  if (normalizedMessage.includes("rate limit")) {
    return "Too many attempts. Please wait a moment and try again.";
  }

  if (isSupabaseBackendIssue(error)) {
    return "The authentication service hit a database/config error. Your password may be correct. Try Forgot password first, and if it keeps happening check the Supabase Auth user record or any Auth hooks.";
  }

  return error.message;
};
