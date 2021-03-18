import EmailForm from './Email';

type Props = {
  type: 'email';
  render?: React.FC;
  styles?: {
    wrapper: string;
  };
};

const Signup: React.FC<Props> = ({ type, children, ...props }) => {
  console.log('here');

  if (type === 'email') {
    return (
      <div>
        <EmailForm />
        {children}
      </div>
    );
  }

  return null;
};

export default Signup;
