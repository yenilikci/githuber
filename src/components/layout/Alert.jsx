import {useContext} from 'react';
import AlertContext from '../../context/alert/AlertContext';

const Alert = () => {
    const {alert} = useContext(AlertContext);

    return (
        alert !== null && (
            <div className="mb-6 bg-red-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                <p className="font-bold">{alert.type}</p>
                <p>{alert.msg}</p>
            </div>
        )
    );
};

export default Alert;
