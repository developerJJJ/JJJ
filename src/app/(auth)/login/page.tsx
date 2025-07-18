export const metadata = {
  title: "Login Page",
  description: "Login to access your account",
};

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <p>This is the login page of our application.</p>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
