import PersonIcon from '@mui/icons-material/Person';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { LoginForm } from '../LoginForm';

export const DivContainer = ({ style }) => {
  return (
    <div className={`${style} DivBox`}>
      <LoginForm></LoginForm>
    </div>
  );
};
