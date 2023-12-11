import dynamic from "next/dynamic";

const CoinSearchAndList = dynamic(() => import('./components/CoinSearchAndList'), { ssr: false })
const TrandingCoins = dynamic(() => import('./components/TrandingCoins'), { ssr: false })

export default function Home() {
  return (
    <div>
      <TrandingCoins />
      <CoinSearchAndList />
    </div>
  )
}
