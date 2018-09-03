import React from 'react';
import IntroductionView from './main/IntroductionView';
import ClientsView  from './main/ClientsView';
import QuestionsView  from './main/QuestionsView';

export default () => (
  <main className='w-100 bt b--black-10 bg-white'>
    <IntroductionView/>
    <ClientsView/>
    <QuestionsView/>
  </main>
);