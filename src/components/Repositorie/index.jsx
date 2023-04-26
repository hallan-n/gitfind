export default function Repositorie({title, description, url}) {
    return (
        
        <div  className="w-2/3 mx-auto">
            <div>
                <a href={url}>
                    <h1 className="text-blue-600 font-extrabold capitalize">{title}</h1>
                    <p className="text-white text-sm">{description}</p>
                </a>
                <hr className='border-1 border-gray-800 mt-5 mx-auto' />
            </div>

        </div>
    )
}

