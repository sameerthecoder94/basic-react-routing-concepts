import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AuthChecker = (props) => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!context.signedIn) {
      navigate('/login');
    }
  }, [context.signedIn, navigate]);

  return props.children; // <MusicPage />
};

export default AuthChecker;
