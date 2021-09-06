export const LOGIN_PATH = '/login';
export const SIGN_UP_PATH = '/signup';
export const SESSION_MAX_AGE = 1 * 24 * 60 * 60; // 7 days
export const SESSION_UPDATE_AGE = 24 * 60 * 60; // 24 hours
export const SESSION_CLIENT_MAX_AGE = 60; // Re-fetch session if cache is older than 60 seconds
export const SESSION_CLIENT_KEEP_ALIVE = 5 * 60; // Send keepAlive message every 5 minutes
