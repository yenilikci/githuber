import {useContext, useEffect} from 'react';
// import Spinner from '../layout/Spinner';
import ReactLoading from 'react-loading';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

function UserResults(props) {

    const {users, loading, fetchUsers} = useContext(GithubContext);

    useEffect(() => {
        fetchUsers();
    }, []);


  if(!loading){
      return (
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
              {users.map((user)=>(
                  <UserItem key={user.id} user={user}/>
              ))}
          </div>
      );
  }
  else {
       return <div className="flex justify-center">
           <ReactLoading type="cylon" color="#ddd" height={500} width={375} />
       </div>
  }
}

export default UserResults;
