import * as React from 'react';
import tw from 'twin.macro';

type Props = {
  render?: React.FC;
  styles?: {
    wrapper: string;
    input: {
      email: string;
      password: string;
    };
  };
};

const Wrapper = tw.div`flex flex-col p-12 w-1/2`;
const Input = tw.input`w-full p-2 border-2 rounded-xl text-center m-2 focus:outline-none focus:border-red-500`;

const EmailForm: React.FC<Props> = ({ styles }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onEmailChange = (e: any) => setEmail(e.target.value);
  const onPassChange = (e: any) => setPassword(e.target.value);

  return (
    <Wrapper className={styles?.wrapper}>
      <div className="flex justify-center w-full relative">
        <Input
          required
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="your email"
        />
      </div>
      <div className="flex w-full relative">
        <Input
          required
          type="password"
          value={password}
          onChange={onPassChange}
          placeholder="your password"
        />
      </div>
    </Wrapper>
  );
};

export default EmailForm;
