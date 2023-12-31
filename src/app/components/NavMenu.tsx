"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Protected Route",
    path: "/protected",
  },
  {
    label: "Server Action",
    path: "/serverAction",
  },
  {
    label: "API From Client",
    path: "/apiFromClient",
  },
  {
    label: "API From Server",
    path: "/apiFromServer",
  },
];

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session?.user?.name}
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

function NavLink({
  path,
  label,
  isActive,
}: {
  path: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link href={path}>
      <li className={isActive ? "activeRoute" : "inactiveRoute"}>{label}</li>
    </Link>
  );
}

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <>
      <AuthButton />
      <ul>
        {links.map((link) => (
          <NavLink
            key={link.path}
            isActive={pathname === link.path}
            {...link}
          />
        ))}
      </ul>
    </>
  );
}
