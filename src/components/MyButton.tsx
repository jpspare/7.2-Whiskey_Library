interface MyButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function MyButton ( props: MyButtonProps ) {
    return (
        <button onClick={ props.onClick } className='p-2 m-3 border border-transparent 
        hover:border-slate-100 hover:bg-white hover:bg-opacity-30 rounded-sm'>
            { props.children }
        </button>
    )
}