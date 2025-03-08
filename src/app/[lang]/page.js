// import Image from "next/image";

export async function generateMetadata({ params }) {
  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      languages: {
        en: `${process.env.NEXT_PUBLIC_BASE_URL}/en`,
      },
    },
  };
}

export default async function Page({ params: { lang } }) {
  console.log(lang);

  return (
    <>
      <h2>Hitting</h2>
    </>
  );
}
