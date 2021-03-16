import React from 'react';

import CardStyled from './Card.styled';
import Icon from '../icon/Icon';
import Rating from '../rating/Rating';
import Image from '../image/Image';
import BlogDetail from '../blogDetail/BlogDetail';
export interface Props {
  className?: string;
  type: string;
  title: string;
  text?: string;
  imageUri: string;
  imageAlt: string;
  date?: string;
  readTime?: string;
  price?: number;
  rating?: string;
  uri: string;
}

const Card = ({
  className,
  type,
  title,
  text,
  imageUri,
  imageAlt,
  readTime,
  date,
  price,
  rating,
  uri,
}: Props) => {
  const CardData = (type: string) => {
    switch (type) {
      case 'blog':
        return (
          <>
            <h3 className="card__title">{title}</h3>
            <Image className="card__thumbnail" path={imageUri} alt={imageAlt} />
            {text && <p className="card__text">{text}</p>}
            <BlogDetail
              className="card__details"
              date={date}
              readTime={readTime}
            />
          </>
        );
      case 'product':
        return (
          <>
            <div className="card__thumbnail-wrapper">
              <Image
                className="card__thumbnail"
                path={imageUri}
                alt={imageAlt}
              />
              <Icon
                type="product-solid"
                className="card__tag"
                color="#C3C6DE"
              />
            </div>
            <div className="card__content">
              <h3 className="card__title">{title}</h3>
              {price && <span className="card__price">£{price}</span>}
              <Rating className="card__rating" rating={rating} />
            </div>
          </>
        );
      case 'explore': {
        return (
          <>
            <Image className="card__thumbnail" path={imageUri} alt={imageAlt} />
            {title && <h4 className="card__title">{title}</h4>}
          </>
        );
      }
      case 'content': {
        return (
          <>
            <h4 className="card__title">{title}</h4>
            <Image className="card__thumbnail" path={imageUri} alt={imageAlt} />
            {text && <p className="card__text">{text}</p>}
          </>
        );
      }
      default:
        break;
    }
  };
  return (
    <CardStyled
      className={className}
      type={type}
      href={uri}
      title={title}
      hasText={text ? true : false}
    >
      {CardData(type)}
    </CardStyled>
  );
};

export default Card;
