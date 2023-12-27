import dynamic from "next/dynamic";

const TrandingCoins = dynamic(() => import('./components/HomePage/TrandingCoins'), { ssr: false })

export default function Home() {
  return (
    <div>
      <TrandingCoins />
    </div>
  )
}
