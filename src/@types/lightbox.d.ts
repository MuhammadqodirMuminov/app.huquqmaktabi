import { GenericSlide } from 'yet-another-react-lightbox';

declare module 'yet-another-react-lightbox' {
  export interface YoutubeSlide extends GenericSlide {
    src: string;
  }

  interface SlideTypes {
    'youtube-slide': YoutubeSlide;
  }
}
