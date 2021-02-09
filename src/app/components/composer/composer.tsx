import React from 'react';
import TextBlock from '~/components/textBlock/TextBlock';
import ImageBlock from '~/components/imageBlock/ImageBlock';
import QuoteBlock from '~/components/quoteBlock/QuoteBlock';
import FeaturedProduct from '~/components/featuredProduct/FeaturedProduct';
import VideoPlayer from '~/components/videoPlayer/VideoPlayer';

interface Props {
  fields: any | any[];
}

const Composer: React.FC<Props> = ({ fields }) => {
  if (!fields) return null;

  return fields.map((field:any, idx:number) => {
    switch (field.type) {
      case 'markup': {
        return (
          <TextBlock text={field.value} key={idx} />
        );
      }
      case 'image': {
        return (
          <ImageBlock image={field.value} title={field.value.altText} text={field.value.caption} key={idx} />
        );
      }
      case 'blockQuote': {
        return (
          <QuoteBlock quote={field.value.text} key={idx} />
        );
      }
      case 'featuredProduct': {
        const linkObject = {
          label: field.value.buttonText,
          href: field.value.product && field.value.product.sys.uri ? field.value.product.sys.uri : (!field.value.product || !field.value.product.sys.uri) && field.value.externalButtonLink ? field.value.externalButtonLink : "/shop",
        }
        return (
          <FeaturedProduct title={field.value.title} text={field.value.summary} link={linkObject} product={field.value.product} key={idx} />
        );
      }
      case 'video': {
        return (
          <VideoPlayer title={field.value.entryTitle} hasControls={true} type={field.value.source} externalURL={field.value.externalURL} internalVideo={field.value.internalVideo && field.value.internalVideo.asset.sys.uri } key={idx} />
        );
      }    
    }
  });
};

export default Composer;
