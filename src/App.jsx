import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  const formatUserName = (userName) => `@${userName}`

  return (
    <section className='App'>
      <TwitterFollowCard 
        formatUserName={formatUserName}
        isFollowing userName="LautaHern" 
        name="Lauta"
      />
      <TwitterFollowCard 
        formatUserName={formatUserName}
        isFollowing={false} userName="LautaHern" 
        name="Lauta"
      />
    </section>
  )
}