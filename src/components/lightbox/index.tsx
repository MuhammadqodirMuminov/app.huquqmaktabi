import { ComponentProps, useRef } from 'react';
import LB from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
// eslint-disable-next-line import/order
import Captions from 'yet-another-react-lightbox/plugins/captions';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import { CaptionsRef } from 'yet-another-react-lightbox';

import { Box } from '../box';
import { Icon, Icons } from '../icons';

interface Properties {
  open: boolean;
  onClose: () => void;
  slides: ComponentProps<typeof LB>['slides'];
  index?: number;
  videoControls?: boolean;
}

const Lightbox = ({
  onClose,
  open,
  slides,
  index,
  videoControls = false,
}: Properties) => {
  const captionsRef = useRef<CaptionsRef>(null);

  return (
    <LB
      plugins={[Thumbnails, Zoom, Captions]}
      open={open}
      close={onClose}
      slides={slides}
      index={index}
      captions={{ ref: captionsRef }}
      on={{
        click: () => {
          (captionsRef.current?.visible
            ? captionsRef.current?.hide
            : captionsRef.current?.show)?.();
        },
      }}
      thumbnails={{
        border: 0,
        imageFit: 'cover',
      }}
      render={{
        slide: ({ slide, offset }) =>
          slide.type === 'youtube-slide' ? (
            <Box
              $sx={{
                width: '100%',
                height: '100%',
                padding: '50px 0',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <Box
                $sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                  display: 'grid',
                  alignContent: 'center',
                }}
              >
                <Box
                  as={'iframe'}
                  $sx={{
                    width: '300%',
                    maxWidth: '300%',
                    marginLeft: '-100%',
                    objectFit: 'cover',
                    aspectRatio: '16 / 3',
                  }}
                  src={`https://www.youtube.com/embed/${slide.src.split('v=')[1]}?controls=${videoControls ? 1 : 0}&preload=metadata&enablejsapi=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1${offset === 0 ? '&autoplay=1' : ''}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </Box>
            </Box>
          ) : null,
        thumbnail: ({ slide }) => {
          return slide.type === 'youtube-slide' ? (
            <Box
              key={index}
              $sx={{
                height: '100%',
                width: '100%',
                position: 'relative',
              }}
            >
              <img
                alt=""
                src={`https://img.youtube.com/vi/${slide.src.split('v=')[1]}/0.jpg`}
                loading="eager"
                draggable={false}
                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              />

              <Box
                $sx={{
                  zIndex: 1,
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: 8,
                  background: 'rgba(0, 0, 0, 0.60)',
                  borderRadius: '50%',
                  aspectRatio: 1,
                  display: 'flex',
                }}
              >
                <Icon
                  as={Icons.Play}
                  style={{
                    width: '20px',
                    height: '20px',
                  }}
                />
              </Box>
            </Box>
          ) : null;
        },
      }}
    />
  );
};

export default Lightbox;
