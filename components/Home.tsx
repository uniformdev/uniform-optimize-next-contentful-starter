import Head from 'next/head';
import { PageFields, TalkFields } from '../lib/contentful';
import { createElement } from 'react';
import { Entry } from 'contentful';
import { TalksContext } from '../components/TalksContext';
import MainHero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import { PersonalizedHero } from '../components/PersonalizedHero';
import { ComponentMapping } from '../lib/ComponentMapping';
import TalkList from '../components/TalkList';
import { RegisterForm } from '../components/RegisterForm';
import { WhyAttendTestPhotoLocation } from '../components/WhyAttend';

export interface PageProps {
  slug: string;
  page: PageFields;
  talks: Entry<TalkFields>[];
}

const componentMapping: ComponentMapping = {
  hero: MainHero,
  cta: CallToAction,
  // that's 'personalized hero' to you, sir.
  '3zPkEj1KqeSn4QdsdnNKO3': PersonalizedHero,
  talksList: TalkList,
  registrationForm: RegisterForm,
  whyAttend: WhyAttendTestPhotoLocation,
};

export function Home({ page, talks }: PageProps) {
  return (
    <TalksContext.Provider value={talks}>
      <Head>
        <title>{page?.title} | UniformConf</title>
      </Head>
      {page?.components &&
        page.components.map((component, index) =>
          createElement(componentMapping[component.sys.contentType.sys.id] ?? (() => null), {
            key: index,
            ...component,
          })
        )}
    </TalksContext.Provider>
  );
}
