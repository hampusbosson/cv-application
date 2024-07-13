import { useState } from 'react'
import './EditSide.css'
import FormContainer from './ContentPage/ContentPage'
import SideBar from './sidebar/SideBar'

function EditSide() {
    const [activeButton, setActiveButton] = useState('content');

    return (
        <div className="edit-side">
            <SideBar activeButton={activeButton} setActiveButton={setActiveButton} />
            <FormContainer activeButton={activeButton}/>
        </div>
    )
}


export default EditSide