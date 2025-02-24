"use client";

import { useUser } from "@clerk/nextjs";

export default function UserData() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Sign in to view this page</div>;
  }

  return (
    <div className="mb-8">
      <p>user birthday: {user?.publicMetadata.userBirthday}</p>
      <p>
        user location: {user?.publicMetadata.userCity}{" "}
        {user?.publicMetadata.userState}
      </p>
    </div>
  );
}
ß;
