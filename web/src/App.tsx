import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'

import './styles/main.css'

import logoImg from './assets/logo-nlw-esports.svg'

interface Game {
  id: string,
  title: string,
  bannerUrl: string,
  _count: {
    ads: number
  }
}

function App() {
  // const [hasUserClikedOnButton, setHasUserClikedOnButton] = useState(false)
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setGames(data)
      })
  }, [])

  // console.log('executou')

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col  items-center my-20">
      <img src={logoImg} />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner key={game.id} bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.ads} />
          )
        })}

      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed">

            <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
              <Dialog.Title>Publique um anúncio</Dialog.Title>

              <Dialog.Content>
                alskjralçkrjaçelrjwoeriqj
              </Dialog.Content>
            </Dialog.Content>

          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>

    </div>
  )
}

export default App
