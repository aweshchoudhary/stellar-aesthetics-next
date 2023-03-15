import HeroSection from '@/components/global/HeroSection'
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
      <link rel="canonical" href="https://stellaraesthetics.in/" />
        <meta
          name="description"
          content="stellar aesthetics, facial cosmetics, clinical cosmetology, trichology, micropigmentation and microblading, hair restoration, facial aesthetics"
        />
        <meta
          name="keywords"
          content="stellar aesthetics, facial cosmetics, clinical cosmetology, trichology, tricology, micropigmentation and microblading, hair restoration, facial aesthetics"
        />
        <title>Best Cosmetics Treatment In India</title>
      </Head>
      <HeroSection/>
    </>
  )
}
