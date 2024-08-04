interface dbLoginType {
  success: boolean;
  username: string | null;
}

export function dbLogin(email: string, password: string): Promise<dbLoginType> {
  let username: string | null = null;
  let success = true;
  return new Promise((resolve, reject) => {
    if (email === "usd@example.com" && password === "1234") {
      username = "USD Test";
    } else {
      success = false;
    }
    resolve({ success, username });
  });
}
