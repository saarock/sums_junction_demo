

interface LogoProps {
    className?: string
}


const Logo: React.FC<LogoProps> = (
    {
        className
    }
) => {
  return (
    <>
    <img src="../../assets/junctionLogo.png" alt="JunctionLogo" width={200} height={200} className={className}/>
    </>
  )
}

export default Logo