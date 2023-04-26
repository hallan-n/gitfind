import img from '../../assets/background.png'
export default function Header() {
    return (
        <div className='bg-slate-950'>
            <div className='p-6'>
                <a className='flex items-center justify-center gap-4' href="#">
                    <p className="text-white text-center text-lg font-extrabold">GitFind</p>
                    <img
                        className='h-12 filter contrast-0'
                        src={img}
                        alt=""
                    />
                </a>
            </div>
        </div>
    )
}