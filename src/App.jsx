import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'LautaHern',
    name: 'Lauta',
    isFollowing: true
  },
  {
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: false
  },
  {
    userName: 'unionxlapatria',
    name: 'Frente de chorros',
    isFollowing: false
  }
]

export function App () {
  // const [name, setName] = useState('LautaHern')
  // const [isFollowing, setIsFollowing] = useState(false)

  return (
    <section className='App'>
      {
       users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
       )) 
      }
    </section>
  )
}