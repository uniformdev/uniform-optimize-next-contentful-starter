import { contentfulOptimizeListReader } from '@uniformdev/optimize-tracker-contentful';
import { Personalize } from '@uniformdev/optimize-tracker-react';
import { Entry } from 'contentful';
import { PersonalizedHeroFields } from '../lib/contentful';
import Hero from './Hero';
import Splitter from './Splitter';

const PersonalizedHeroLoading = () => {
  return (
    <>
      <div className="pt-24">
        <div
          className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
          style={{ height: '548px' }}
        >
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left min-h-500">
            <p className="uppercase tracking-loose w-full"></p>
            <h1 className="my-4 text-5xl font-bold leading-tight"></h1>
            <p className="leading-normal text-2xl mb-8"></p>
          </div>
          <div className="w-full md:w-3/5 py-6 text-center"></div>
        </div>
      </div>
      <Splitter />
    </>
  );
};

export const PersonalizedHero: React.FC<Entry<PersonalizedHeroFields>> = ({ fields }) => {
  const variations = contentfulOptimizeListReader(fields.unfrmOptP13nList);
  return (
    <Personalize
      variations={variations}
      trackingEventName="heroPersonalized"
      component={Hero}
      loadingMode={PersonalizedHeroLoading}
    />
  );
};
