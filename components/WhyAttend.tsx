import { Entry, Asset } from 'contentful';
import React from 'react';
import { WhyAttendFields } from '../lib/contentful';
import { Test } from '@uniformdev/optimize-tracker-react';
import { TestVariant } from '@uniformdev/optimize-tracker-common';
import Image from 'next/image';

export const WhyAttendLoading = () => {
  return <div className="container mx-auto flex flex-wrap pt-4 pb-12" style={{ minHeight: 515 }}></div>;
};

enum PhotoLocation {
  Left = 'left',
  Right = 'right',
}

type WhyAttendProps = Entry<WhyAttendFields> & {
  photoLocation: PhotoLocation | string;
};

const locationVariants: TestVariant[] = [{ id: PhotoLocation.Left }, { id: PhotoLocation.Right }];

export const WhyAttendTestPhotoLocation = (props: Entry<WhyAttendFields>) => {
  return (
    <Test
      name="Why Attend Photo Location Test"
      variations={locationVariants}
      loadingMode={WhyAttendLoading}
      component={({ id }) => <WhyAttend {...props} photoLocation={id} />}
    />
  );
};

export const WhyAttend = ({ fields, photoLocation }: WhyAttendProps) => (
  <section className="bg-white border-b py-8">
    <div className="container max-w-5xl mx-auto m-8">
      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        {fields?.title}
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
      </div>
      {photoLocation === PhotoLocation.Left ? (
        <ImageLeftCallout description={fields.description} image={fields.image} />
      ) : (
        <ImageRightCallout description={fields.description} image={fields.image} />
      )}
    </div>
  </section>
);

type CalloutProps = {
  description: string;
  image?: Asset;
};

const ImageRightCallout = ({ description, image }: CalloutProps) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-5/6 sm:w-1/2 p-6">
        <p className="text-gray-600 mb-8" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="w-full sm:w-1/2 p-6">
        <Image
          src="/uniformconf/pexels-luis-quintero-2774556_xmxwp3.jpg"
          alt={image?.fields?.file?.fileName}
          width={image?.fields?.file?.details?.image?.width}
          height={image?.fields?.file?.details?.image?.height}
          layout="responsive"
          loading="lazy"
          className="w-full sm:h-64 mx-auto"
        />
      </div>
    </div>
  );
};

const ImageLeftCallout = ({ description, image }: CalloutProps) => {
  return (
    <div className="flex flex-wrap flex-col-reverse sm:flex-row">
      <div className="w-full sm:w-1/2 p-6 mt-6">
        <Image
          src="/uniformconf/pexels-luis-quintero-2774556_xmxwp3.jpg"
          alt={image?.fields?.file?.fileName}
          width={image?.fields?.file?.details?.image?.width}
          height={image?.fields?.file?.details?.image?.height}
          layout="responsive"
          loading="lazy"
          className="w-5/6 sm:h-64 mx-auto"
        />
      </div>
      <div className="w-full sm:w-1/2 p-6 mt-6">
        <div className="align-middle">
          <p className="text-gray-600 mb-8" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  );
};
