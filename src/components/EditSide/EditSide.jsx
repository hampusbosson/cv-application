import './EditSide.css'
import FormContainer from './form-container/FormContainer'
import SideBar from './sidebar/SideBar'

function EditSide() {
    return (
        <div className="edit-side">
            <SideBar />
            <FormContainer />
        </div>
    )
}


export default EditSide