import Background from '../assests/images/whiskey-collection-md.jpg'
import DataTable from '../components/DataTable'

function Dashboard() {
  return (
    <div 
    style={{ backgroundImage: `url(${ Background })`}} 
    className='flex -mt-16 mx-auto bg-cover bg-center bg-fixed h-screen'
    >
      <div className='mt-20 w-full'>
          <DataTable />
      </div>
    </div>
  )
}

export default Dashboard