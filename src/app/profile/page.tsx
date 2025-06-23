import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile Page",
  description: "Profile page of the application",
};

export default async function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>This is the profile page of my application.</p>
    </div>
  );
}
