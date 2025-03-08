// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";
//import { usePathname } from "next-intl/navigation";

import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import { Work_Sans } from "next/font/google";

// import { UserProvider } from "@auth0/nextjs-auth0/client";
// import { getSession } from "@auth0/nextjs-auth0";
import ToasterProvider from "@/components/providers/ToasterProvider";
import { redirect } from "next/navigation";
// import { getCurrentUser } from "@/app/actions/getCurrentUser";

const work_sans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Live Government Bus Tracking | GPS Public Transport Locator",
  description: "NaviGo to track the government buses using GPS tracking system",
  keywords:
    "Government bus tracking, Real-time bus tracking, GPS bus tracker, Track government buses, Public transport tracker, Live bus location",
};

export default async function RootLayout({ children, params: { lang } }) {
  if (!routing.locales.includes(lang)) {
    redirect("/");
  }

  return (
    <html lang={lang}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-straight/css/uicons-solid-straight.css"
        ></link>
        {/* <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"></link> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className={work_sans.className}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
