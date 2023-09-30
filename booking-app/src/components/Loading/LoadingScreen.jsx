
import './Loading.css'
import { CircularProgress } from '@mui/material'


function LoadingScreen(){
    
    return (
        <div className="background">
            <div className={`loadingContainer`} >
                <div>
                    <CircularProgress size={50} className='circularProgress' />
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen
