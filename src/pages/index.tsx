import Head from 'next/head';
import tw from 'twin.macro';

import { store } from '@storage';

const Wrapper = tw.div`flex flex-col items-center justify-center min-h-screen py-2`;
const Card = tw.a`p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600`;

const Home = () => {
  const visitor = store.use(store.get.visitor);

  console.log('visitor', visitor);

  return (
    <Wrapper>
      <Card>
        <figure className="lg:flex bg-gray-200 rounded-xl p-8 lg:p-4">
          <div className="pt-6 lg:p-4 text-center lg:text-left space-y-4">
            YOYOYOYO
          </div>
          <div className="pt-6 lg:p-4 text-center lg:text-left space-y-4">
            {visitor.status.type}
          </div>
        </figure>
      </Card>
    </Wrapper>
  );
};

export default Home;
