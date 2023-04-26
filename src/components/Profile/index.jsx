export default function Profile({avatarUrl, name, bio, login}) {      
    return (
        <div>
            
            <div>
                <div className='flex flex-wrap gap-3 items-center justify-center mt-20 p-4'>
                    <img className='rounded-md w-36 h-36' src={avatarUrl} alt="" />
                    <div className='w-1/2'>
                        <p className='text-white font-bold'>{name}</p>
                        <p className='text-gray-400 text-sm mb-2'>@{login}</p>
                        <p className='text-white text-justify'>{bio}</p>
                    </div>
                </div>
                <hr className='border-2 border-gray-800 mt-5 w-2/3 mx-auto' />
            </div>

        </div>
    )
}


