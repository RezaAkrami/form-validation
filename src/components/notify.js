import { toast } from 'react-toastify';

const notify = (type) =>{

    if( type === "success"){
        toast.success('you sgin in successfully');
    }else{
        toast.error('invalid data');
    }
} 
    

export default notify;