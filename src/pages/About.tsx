import Background from '../assests/images/whiskey-collection-md.jpg'

function About() {
  return (
    <div 
    style={{ backgroundImage: `url(${ Background })`}} 
    className='flex -mt-16 mx-auto bg-cover bg-center bg-fixed h-screen 
    justify-center'
  >
    <div className='fixed inset-y-1/3 w-screen'>
      <h1 
        className='p-5 text-6xl bg-black bg-opacity-50 text-slate-100
        text-center'
      >
        About Page
      </h1>
    </div>
  </div>
  )
}

export default About
