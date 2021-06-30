import { Entry } from 'contentful';
import React from 'react';
import { WhyAttendFields } from '../lib/contentful';
import { Test } from '@uniformdev/optimize-tracker-react';
import { TestVariant } from '@uniformdev/optimize-tracker-common';

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

export const WhyAttend = ({ fields: { title, description, image }, photoLocation }: WhyAttendProps) => {
  return (
    <section className="bg-white border-b py-8">
      <div
        className="container mx-auto flex flex-wrap pt-4 pb-12"
        style={{ flexDirection: photoLocation === PhotoLocation.Left ? 'row' : 'row-reverse' }}
      >
        <div className="w-1/2">
          <img
            src={image.fields.file.url}
            alt={image.fields.file.fileName ?? title}
            width={image?.fields?.file?.details?.image?.width ?? 400}
            height={image?.fields?.file?.details?.image?.height ?? 400}
            loading="lazy"
            className="p-10"
          />
        </div>
        <div className="w-1/2">
          <div className="p-10">
            <h2 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
              {title}
            </h2>
            <hr />
            <p className="text-gray-800 p-10 whitespace-pre-line">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
