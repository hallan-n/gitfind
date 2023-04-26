import Header from '../../components/Header'
import Profile from '../../components/Profile'
import Repositorie from '../../components/Repositorie'

import { useState } from 'react'




export default function Home() {
    const [findUser, setFindUser] = useState()
    const [user, setUser] = useState(null)
    const [repos, setRepos] = useState(null)


    const handleFindUser = async () => {
        const find = await fetch(`https://api.github.com/users/${findUser}`)
        const findFilter = await find.json();
        if (findFilter.name) {
            const { avatar_url, name, bio, login } = findFilter
            setUser({ avatar_url, name, bio, login })

            const findRepo = await fetch(`https://api.github.com/users/${findUser}/repos`)
            const findFilterRepo = await findRepo.json();
            setRepos(findFilterRepo)

        }


    }


    return (
        <div className='bg-slate-900'>
            <Header />
            <div className='flex flex-col mt-5'>
                <form className="mt-5 flex gap-1 justify-center">
                    <input
                        className="border-2 border-slate-600 bg-slate-800 hover:bg-slate-950 text-white rounded-lg px-3 w-1/2"
                        type="text"
                        name=""
                        id=""
                        onChange={(e) => setFindUser(e.target.value)}
                    />
                    <button
                        className="border-2 border-slate-600 bg-slate-800 hover:bg-slate-950 p-1 px-3 rounded-lg text-white"
                        type="button"
                        onClick={handleFindUser}
                    >Buscar</button>

                </form>
            </div>
            {user?.name ? (
                <Profile avatarUrl={user.avatar_url} name={user.name} bio={user.bio} login={user.login} />

            ) : null}
            <div>
                {repos ?
                    <div>
                        <div>
                            <h1 className='my-5 text-white text-center text-2xl font-extrabold'>Respositórios</h1>
                            {repos.map(res => <Repositorie title={res.name} description={res.description} url={res.url} />) }
                        </div>
                    </div>
                    : null}
            </div>
        </div>
    )
}

